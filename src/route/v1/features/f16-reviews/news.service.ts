import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { News, NewsDocument } from './schemas/news.schema';
import CreateNewsDto from './dto/create-news.dto';
import UpdateNewsDto from './dto/update-news.dto';
import NewsRepository from './news.repository';
import { Type } from 'aws-sdk/clients/cloudformation';

@Injectable()
export default class NewsService {
  constructor(
    @InjectModel('News')
    private readonly newsModel: Model<NewsDocument>,

    private readonly newsRepository: NewsRepository,
  ) {}

  async create(dto: CreateNewsDto): Promise<News> {
    const created = new this.newsModel(dto);
    return created.save();
  }

  async findManyBy(condition: any): Promise<News[]> {
    if (condition._id && !Types.ObjectId.isValid(condition._id)) {
      throw new BadRequestException('ID không hợp lệ');
    }

    return this.newsRepository.find(condition);
  }

  async updateOneById(
    id: Types.ObjectId,
    body: UpdateNewsDto,
  ): Promise<News> {
    const updated = await this.newsModel.findByIdAndUpdate(id, body, {
      new: true,
    });

    if (!updated) {
      throw new NotFoundException('News not found');
    }

    return updated;
  }

  async deleteOneHardById(id: Types.ObjectId): Promise<any> {
    return this.newsRepository.deleteOneHardById(id);
  }

  async deleteManyHardByIds(ids: Types.ObjectId[]): Promise<any> {
    return await this.newsModel.deleteMany({ _id: { $in: ids } });
  }
  async paginate(query: any): Promise<any> {
    const { page = 1, limit = 10 } = query;
    const skip = (page - 1) * limit;
    const data = await this.newsModel.find().skip(skip).limit(limit).exec();
    const total = await this.newsModel.countDocuments();
    return { data, total, page, limit };
  }

  async findOneBy(filter: any): Promise<any> {
    return await this.newsModel.findOne(filter).exec();
  }

  async findOneById(id: Types.ObjectId, options: any = {}): Promise<any> {
    return await this.newsModel.findById(id, options).exec();
  }
  
}
