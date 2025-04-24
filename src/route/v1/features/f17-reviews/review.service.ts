import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
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
  }): Promise<ReviewDocument> {
    if (!Types.ObjectId.isValid(data.customerId) || !Types.ObjectId.isValid(data.productId)) {
      throw new BadRequestException('userId hoặc productId không hợp lệ');
    }

    if (data.rating < 1 || data.rating > 5) {
      throw new BadRequestException('Điểm đánh giá phải từ 1 đến 5');
    }

    const review = await this.reviewRepository.create({
      customerId: data.customerId,
      productId: data.productId,
      content: data.content,
      rating: data.rating,
      attachments: data.attachments|| [],
    });

    return review;
  }

  async getReview(productId: string): Promise<ReviewDocument[]> {
    const product = await this.reviewRepository.findOneBy({productId})
    if (!product) {
      throw new BadRequestException('productId không hợp lệ');
    }
    // if (!this.reviewModel) {
    //   throw new Error('ReviewModel không hợp lệ');
    // }
    // const reviews = await this.reviewModel
    // .find({ productId })
    // .populate('userId', 'name')
    // .exec();

    return product;
  }

  // async addReply(id: string, reply: string): Promise<ReviewDocument> {
  //   if (!Types.ObjectId.isValid(id)) {
  //     throw new BadRequestException('ID không hợp lệ');
  //   }

  //   const review = await this.reviewRepository.updateById(id, { reply });
  //   if (!review) {
  //     throw new NotFoundException('Đánh giá không tồn tại');
  //   }

  //   return review;
  // }

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
