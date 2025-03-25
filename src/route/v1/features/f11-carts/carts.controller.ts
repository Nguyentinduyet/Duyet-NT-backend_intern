import { ApiQueryParams } from '@decorator/api-query-params.decorator';
import AqpDto from '@interceptor/aqp/aqp.dto';
import WrapResponseInterceptor from '@interceptor/wrap-response.interceptor';
import {
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

@ApiTags('Carts')
@UseInterceptors(WrapResponseInterceptor)
@Controller('v1/carts')
export default class CartsController {
  constructor(private readonly cartsService: CartsService) {}

  @Get('')
  @HttpCode(200)
  async findAll(@Query() query: any): Promise<any> {
    return this.cartsService.findManyBy(query);
  }

  @Post('add-to-cart')
  @HttpCode(201)
  async create(@Body() body: CreateCartsDto): Promise<any> {
    return this.cartsService.create(body);
  }

  @Put('update-quantity')
  @HttpCode(200)
  async updateQuantity(
    @Body('userId') userId: string,
    @Body('productId') productId: string,
    @Body('sku') sku: string,
    @Body('quantity') quantity: number,
  ): Promise<any> {
    return this.cartsService.updateQuantity(userId, productId, sku, quantity);
  }

  @Delete('remove-item/:userId/:productId/:sku')
  @HttpCode(204)
  async removeItem(
    @Param('userId') userId: string,
    @Param('productId') productId: string,
    @Param('sku') sku: string,
  ): Promise<any> {
    return this.cartsService.removeItem(userId, productId, sku);
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
    const result = await this.cartsService.findOneById(id, { populate });
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
}
