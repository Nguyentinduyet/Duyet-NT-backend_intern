import { ApiQueryParams } from '@decorator/api-query-params.decorator';
import AqpDto from '@interceptor/aqp/aqp.dto';
import WrapResponseInterceptor from '@interceptor/wrap-response.interceptor';
import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  NotFoundException,
  Param,
  Post,
  Put,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import ParseObjectIdPipe from '@pipe/parse-object-id.pipe';
import { Types } from 'mongoose';
import CreateCartsDto from './dto/create-carts.dto';
import UpdateCartsDto from './dto/update-carts.dto';
import CartsService from './carts.service';
import { RemoveItemDto } from './dto/remove-items.dto';
import AddItemDto from './dto/add-items.dto';

@ApiTags('Carts')
@UseInterceptors(WrapResponseInterceptor)
@Controller('')
export default class CartsController {
  [x: string]: any;
  constructor(private readonly cartsService: CartsService) {}

  @Get('total/:userId')
   @HttpCode(200)
   async totalCart(
     @Param('userId') userId: string,
     @Query() query: any,
   ): Promise<any> {
     const result = await this.cartService.totalCart(userId, query.filter);
     return result;
  }

  /**
   * Add to cart
   *
   * @param body
   * @returns
   */
  @Post('/:cartId/item')
  @HttpCode(200)
  async addItemToCart(
    @Param('cartId', ParseObjectIdPipe) cartId: string,
    @Body() body: AddItemDto,
  ) {
    return this.cartService.addItemToCart(cartId, body);
  }

  

  @Get('')
   @HttpCode(200)
   async findAll(
    @Query() { filter, population, ...option }: AqpDto,
  ): Promise<any> {
    console.log(population);
    const result = await this.cartService.findManyBy(filter);
    return result;
  }
  


  @Delete(':cartId/items/:productId/sku')
  async removeItemFromCart(
    @Param('cartId') cartId: string,
    @Param('productId') productId: string,
    @Param('skuId') skuId: string,
  ) {
    const result = await this.cartsService.removeItem(cartId, productId);
    return { message: 'Item removed successfully', result };
  }
  

  @Delete(':ids/ids')
  @HttpCode(204)
  async deleteManyByIds(@Param('ids') ids: string): Promise<any> {
    return this.cartsService.deleteManyHardByIds(
      ids.split(',').map((item: string) => new Types.ObjectId(item)),
    );
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(@Param('id') id: string): Promise<any> {
    return this.cartsService.deleteOneHardById(id);
  }

  @Get('paginate')
  @HttpCode(200)
  async paginate(@ApiQueryParams() query: AqpDto): Promise<any> {
    return this.cartsService.paginate(query);
  }

  @Get('find')
  @HttpCode(200)
  async findOneBy(@ApiQueryParams() { filter, projection }: AqpDto): Promise<any> {
    const result = await this.cartsService.findOneBy(filter, { projection });
    if (!result) throw new NotFoundException('The item does not exist');
    return result;
  }

  @Get(':id')
  @HttpCode(200)
  async findOneById(
    @Param('id', ParseObjectIdPipe) id: Types.ObjectId,
    @ApiQueryParams('population') populate: AqpDto,
  ): Promise<any> {
    const result = await this.cartsService.findOneById(id);
    if (!result) throw new NotFoundException('The item does not exist');
    return result;
  }

  @Post('add')
  @HttpCode(200)
  async addToCart(
    @Body('userId') userId: string,
    @Body('productId') productId: string,
    @Body('sku') sku: string,
    @Body('quantity') quantity: number,
  ): Promise<any> {
    return this.cartsService.addToCart(userId, productId, sku, quantity);
  }

  @Get('user/:userId')
  @HttpCode(200)
  async getCart(@Param('userId') userId: string): Promise<any> {
    return this.cartsService.getCart(userId);
  }

  /**
   * Add to cart
   *
   * @param body
   * @returns
   */
  @Get('users/:userId')
  @HttpCode(200)
  async getMyCart(@Param('userId', ParseObjectIdPipe) userId: string) {
    // @GetCurrentUserId() userId: string
    return this.cartService.getMyCart(userId);
  }

}
