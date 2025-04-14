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
import { Type } from 'aws-sdk/clients/cloudformation';

@Injectable()
export default class ReviewService {
  [x: string]: any;
  constructor(
    @InjectModel('Review')
    private readonly newsModel: Model<ReviewDocument>,

    private readonly newsRepository: ReviewRepository,
  ) {}

  async create(dto: CreateReviewDto): Promise<Review> {
    const created = new this.newsModel(dto);
    return created.save();
  }

  async findManyBy(condition: any): Promise<Review[]> {
    if (condition._id && !Types.ObjectId.isValid(condition._id)) {
      throw new BadRequestException('ID không hợp lệ');
    }

    return this.newsRepository.find(condition);
  }

  async updateOneById(
    id: Types.ObjectId,
    body: UpdateReviewDto,
  ): Promise<Review> {
    const updated = await this.newsModel.findByIdAndUpdate(id, body, {
      new: true,
    });

    if (!updated) {
      throw new NotFoundException('Review not found');
    }

    return updated;
  }

  async created(createReviewDto: CreateReviewDto): Promise<Review> {
    return await this.reviewModel.create(createReviewDto);
  }

  async findAll(): Promise<Review[]> {
    return this.reviewModel.find().populate(['customerId', 'productId']);
  }

  async findByProduct(productId: string): Promise<Review[]> {
    return this.reviewModel.find({ productId });
  }

  async delete(id: string): Promise<any> {
    return this.reviewModel.findByIdAndDelete(id);
  }
  
  async deleteOneHardById(id: Types.ObjectId | string): Promise<any> {
    return this.reviewModel.findByIdAndDelete(id).exec();
  }
  
}
