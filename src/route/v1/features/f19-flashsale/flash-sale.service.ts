import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Flashsale, FlashsaleDocument } from './schemas/flash-sale.schema';
import CreateFlashsaleDto from './dto/create-flash-sale.dto';
import UpdateFlashsaleDto from './dto/update-flash-sale.dto';
import FlashsaleRepository from './flash-sale.repository';
import { Type } from 'aws-sdk/clients/cloudformation';

@Injectable()
export default class FlashsaleService {
  constructor(
    @InjectModel('Flashsale')
    private readonly newsModel: Model<FlashsaleDocument>,

    private readonly newsRepository: FlashsaleRepository,
  ) {}

  async create(dto: CreateFlashsaleDto): Promise<Flashsale> {
    const created = new this.newsModel(dto);
    return created.save();
  }

  async findManyBy(condition: any): Promise<Flashsale[]> {
    if (condition._id && !Types.ObjectId.isValid(condition._id)) {
      throw new BadRequestException('ID không hợp lệ');
    }

    return this.newsRepository.find(condition);
  }

  async updateOneById(
    id: Types.ObjectId,
    body: UpdateFlashsaleDto,
  ): Promise<Flashsale> {
    const updated = await this.newsModel.findByIdAndUpdate(id, body, {
      new: true,
    });

    if (!updated) {
      throw new NotFoundException('Flashsale not found');
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
