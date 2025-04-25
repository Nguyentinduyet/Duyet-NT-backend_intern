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

import UpdateReviewDto from './dto/update-review.dto';
import ReviewService from './review.service';
import { ReviewDocument } from './schemas/review.schema';
import CreateReviewDto from './dto/create-review.dto';
// Dòng import @nestjs/i18n đã bị xóa

@ApiTags('Review')
@UseInterceptors(WrapResponseInterceptor)
@Controller('v1/review')
export default class ReviewController {
  [x: string]: any;
  constructor(private readonly reviewService: ReviewService) {}

  /**
   * Find all
   *
   * @param query
   * @returns
   */
  @Get('')
  @HttpCode(200)
  async findAll(@Query() query: any): Promise<any> {
    const result = await this.reviewService.findManyBy(query);
    return result;
  }
  

  /**
   * Create
   *
   * @param body
   * @returns
   */
  @Post()
  async create(
    @Body() body: CreateReviewDto
  ): Promise<ReviewDocument> {
    return this.reviewService.create(body);
  }

  /**
   * Update by ID
   *
   * @param id
   * @param body
   * @returns
   */
  @Put(':id')
  @HttpCode(200)
  async update(
    @Param('id', ParseObjectIdPipe) id: Types.ObjectId,
    @Body() body: UpdateReviewDto,
  ): Promise<any> {
    const result = await this.reviewService.updateOneById(id.toString(), body);
    return result;
  }

  /**
   * Delete hard many by ids
   *
   * @param ids
   * @returns
   */
  @Delete(':ids/ids')
  async deleteManyByIds(@Param('ids') ids: string): Promise<any> {
    const result = await this.reviewService.deleteManyHardByIds(
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
  async delete(
    @Param('id', ParseObjectIdPipe) id: Types.ObjectId,
  ): Promise<any> {
    const result = await this.reviewService.deleteOneHardById(id);
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
    return this.reviewService.paginate(query);
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
    return this.reviewService.findOneBy(filter);
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
    const result = await this.reviewService.findOneById(id, { populate });

    if (!result) throw new NotFoundException('The item does not exist');

    return result;
  }

  /**
   *
   * @param productId
   * @returns
   */
 @Get('product/:productId')
@HttpCode(200)
async getStatsProductReview(
  @Param('productId', ParseObjectIdPipe) productId: string,
): Promise<any> {
  const reviews = await this.reviewService.getStatsProductReview(productId);
  return reviews;
}


  /**
   *
   * @param id
   * @param reply
   * @returns
   */
  @Post(':id/reply')
  @HttpCode(200)
  async addReply(
    @Param('id', ParseObjectIdPipe) id: Types.ObjectId,
    @Body('reply') reply: string,
  ): Promise<ReviewDocument> {
    return this.reviewService.addReply(id.toString(), reply);
  }

  @Get(':productId/stats')
  async getStats(@Param('productId') productId: string) {
    return this.reviewService.getStatsProductReview(productId);
  }

  @Get(':productId/has-media-count')
  getReviewHasMediaCount(@Param('productId') productId: string) {
    return this.reviewService.getReviewHasMediaCount(productId);
  }

  @Get(':productId/rating-stats')
  getRatingStats(@Param('productId') productId: string) {
    return this.reviewService.getRatingStats(productId);
  }

  @Get(':productId/filter-by-rating')
async filterByRating(
  @Param('productId') productId: string,
  @Query('ratings') ratings: string
) {
  const ratingArray = ratings.split(',').map(Number);
  return this.reviewService.filterReviewsByRating(productId, ratingArray);
}

@Get(':productId/with-details')
async getReviewsWithDetails(@Param('productId') productId: string) {
  return this.reviewService.getReviewsWithDetails(productId);
}


}