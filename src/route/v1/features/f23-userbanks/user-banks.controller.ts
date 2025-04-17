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
  Patch,
  Post,
  Put,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import ParseObjectIdPipe from '@pipe/parse-object-id.pipe';
import { Types } from 'mongoose';
import CreateUserbanksDto from './dto/create-user-banks.dto';
import UpdateUserbanksDto from './dto/update-user-banks.dto';
import UserbanksService from './user-banks.service';
import { Userbanks } from './schemas/user-banks.schema';

@ApiTags('Userbanks')
@UseInterceptors(WrapResponseInterceptor)
@Controller('v1/userbanks')
export default class UserbanksController {
  [x: string]: any;
  constructor(private readonly userbanksService: UserbanksService) {}

  /**
   * Find all
   *
   * @param query
   * @returns
   */
  @Get('')
  @HttpCode(200)
  async findAll(@Query() query: any): Promise<any> {
    const result = await this.userbanksService.findManyBy(query);
    return result;
  }

  /**
   * Create
   *
   * @param body
   * @returns
   */
  @Post()
async create(@Body() createBannerDto: CreateUserbanksDto): Promise<Userbanks> {
  return this.userbanksService.create(createBannerDto);
}

  /**
   * Update by ID
   *
   * @param id
   * @param body
   * @returns
   */
  @Put(':id')
async updateOneById(
  @Param('id') id: string,
  @Body() updateUserbanksDto: UpdateUserbanksDto,
): Promise<Userbanks> {
  const objectId = new Types.ObjectId(id);
  return this.userbanksService.updateOneById(objectId, updateUserbanksDto);
}


  /**
   * Delete hard many by ids
   *
   * @param ids
   * @returns
   */
  @Delete(':ids/ids')
  // @HttpCode(204)
  async deleteManyByIds(@Param('ids') ids: string): Promise<any> {
    const result = await this.userbanksService.deleteManyHardByIds(
      ids.split(',').map((item: any) => new Types.ObjectId(item)),
    );
    return result;
  }

  /**
   * Delete by ID
   *
   * @param id
   * @returns
   */
  @Delete(':id')
  // @HttpCode(204)
  async delete(
    @Param('id', ParseObjectIdPipe) id: Types.ObjectId,
  ): Promise<any> {
    const result = await this.userbanksService.deleteOneHardById(id);

    return result;
  }

  /**
   * Paginate
   *
   * @param query
   * @returns
   */
  @Get('paginate')
  @HttpCode(200)
  async paginate(@ApiQueryParams() query: AqpDto): Promise<any> {
    return this.userbanksService.paginate(query);
  }

  /**
   * Find one by ID
   *
   * @param id
   * @returns
   */
  @Get('/one')
  @HttpCode(200)
  async findOneBy(
    @ApiQueryParams() { filter, projection }: AqpDto,
  ): Promise<any> {
    return this.userbanksService.findOneBy(filter);
  }

  /**
   * Find one by ID
   *
   * @param id
   * @returns
   */
  @Get(':id')
  @HttpCode(200)
  async findOneById(
    @Param('id', ParseObjectIdPipe) id: Types.ObjectId,
    @ApiQueryParams('population') populate: AqpDto,
  ): Promise<any> {
    const result = await this.userbanksService.findOneById(id, { populate });

    if (!result) throw new NotFoundException('The item does not exist');

    return result;
  }


}
