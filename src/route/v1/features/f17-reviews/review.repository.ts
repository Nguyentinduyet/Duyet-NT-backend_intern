import BaseRepository from '@base-inherit/base.repository';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PaginateModel, Types } from 'mongoose';
import { Review, ReviewDocument } from './schemas/review.schema';

@Injectable()
export default class ReviewRepository extends BaseRepository<ReviewDocument> {
  [x: string]: any;
  constructor(
    @InjectModel(Review.name)
    model: PaginateModel<ReviewDocument>,
  ) {
    super(model);
  }


  async create(data: Partial<Review>): Promise<ReviewDocument> {
    return this.model.create(data);
  }


  async findByProductId(productId: string): Promise<ReviewDocument[]> {
    return this.model
      .find({ productId, userId: { $ne: null} })
      .populate('userId', 'name')
      .exec();
  }

  async findById(id: string, options?: any): Promise<ReviewDocument | null> {
    let query = this.model.findById(id);
    if (options?.populate) {
    }
    return query.exec();
  }

  async updateById(id: string, updateData: Partial<Review>): Promise<ReviewDocument> {
    if (!Types.ObjectId.isValid(id)) {
      throw new BadRequestException('ID không hợp lệ');
    }
  
    const updatedReview = await this.model.findByIdAndUpdate(id, updateData, {
      new: true,
    }).exec();
  
    if (!updatedReview) {
      throw new NotFoundException('Đánh giá không tồn tại');
    }
  
    return updatedReview;
  }
  

  async deleteById(id: string): Promise<ReviewDocument | null> {
    return this.model.findByIdAndDelete(id).exec();
  }


  async findMany(filter: any): Promise<ReviewDocument[]> {
    return this.model.find(filter).exec();
  }

  async findOne(filter: any): Promise<ReviewDocument | null> {
    return this.model.findOne(filter).exec();
  }


  async paginate(query: any): Promise<any> {
    const { filter, projection, options } = query;
    return this.model.paginate(filter || {}, {
      ...options,
      projection: projection || {},
    });
  }
}
