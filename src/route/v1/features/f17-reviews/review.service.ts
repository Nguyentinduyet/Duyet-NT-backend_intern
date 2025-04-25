import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model, Types } from 'mongoose';
import { Review, ReviewDocument } from './schemas/review.schema';
import CreateReviewDto from './dto/create-review.dto';
import UpdateReviewDto from './dto/update-review.dto';
import ReviewRepository from './review.repository';
import ProductsService from '../f4-products/products.service';

@Injectable()
export default class ReviewService {
  [x: string]: any;
  constructor(
    @InjectModel('Review')
    private readonly reviewModel: Model<ReviewDocument>,

    private readonly reviewRepository: ReviewRepository,
    readonly productService : ProductsService,
  ) {}

  async create(data: {
    customerId: string;
    productId: string;
    content: string;
    rating: number;
    attachments?: string[];
    orderId: string;
    skuId: string;
    likes: number;
    replyId?: string;
  }): Promise<ReviewDocument> {
    if (!Types.ObjectId.isValid(data.customerId) || !Types.ObjectId.isValid(data.productId)) {
      throw new BadRequestException('customerId hoặc productId không hợp lệ');
    }
  
    if (data.rating < 1 || data.rating > 5) {
      throw new BadRequestException('Điểm đánh giá phải từ 1 đến 5');
    }

    const review = await this.reviewRepository.create({
      customerId: data.customerId,
      productId: data.productId,
      content: data.content,
      rating: data.rating,
      attachments: data.attachments ?? [],
      orderId: data.orderId,
      skuId: data.skuId,
      likes: data.likes ?? 0,
      replyId: data.replyId,
    });
  
    return review;
  }
  async getStatsProductReview(productId: string) {
    const reviewHasContentCountPromise = this.reviewRepository.findAndCount({
      content: {$exists: true, $ne: ""},productId
    })
    const [reviewHasContentCount] = await Promise.all([reviewHasContentCountPromise])

    return {
      reviewHasContentCount
    };
  }

  async getReviewHasMediaCount(productId: string) {
    return this.reviewRepository.count({
      productId: new String(productId),
      attachments: { $exists: true, $not: { $size: 0 } }
    });
  }

  async getRatingStats(productId: string) {
    const stats = await this.reviewRepository.aggregate([
      { $match: { productId } },
      { $group: { _id: '$rating', count: { $sum: 1 } } },
      { $sort: { _id: -1 } }
    ]);
    return stats.map(r => ({ rating: r._id, count: r.count }));
  }

  async filterReviewsByRating(productId: string, ratings: number[]) {
    return this.reviewRepository.find({
      productId: new String (productId),
      rating: { $in: ratings }
    });
  }

  async getReviewsWithDetails(productId: string) {
    return this.reviewRepository.find({
      productId: new mongoose.Types.ObjectId(productId),
      $or: [
        { content: { $exists: true, $ne: 'sản phẩm toẹt dời' } },
        { attachments: { $exists: true, $not: { $size: 0 } } }
      ]
    });
  }
  

  async delete(id: string): Promise<void> {
    if (!Types.ObjectId.isValid(id)) {
      throw new BadRequestException('ID không hợp lệ');
    }


    const result = await this.reviewRepository.deleteOne({ _id: id });


    if (result.deletedCount === 0) {
      throw new NotFoundException('Đánh giá không tồn tại');
    }
  }

  async updateOneById(id: string, data: Partial<Review>): Promise<ReviewDocument> {
    if (!Types.ObjectId.isValid(id)) {
      throw new BadRequestException('ID không hợp lệ');
    }

    const updated = await this.reviewRepository.updateById(id, data);

    if (!updated) {
      throw new NotFoundException('Đánh giá không tồn tại');
    }

    return updated;
  }
  async findManyBy(query: any): Promise<ReviewDocument[]> {
    return this.reviewModel.find(query).exec();
  } 
}
