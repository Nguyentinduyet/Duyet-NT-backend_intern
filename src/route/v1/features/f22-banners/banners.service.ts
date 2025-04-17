import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Banners, BannersDocument } from './schemas/banners.schema';
import CreateBannersDto from './dto/create-banners.dto';
import UpdateBannersDto from './dto/update-banners.dto';
import BannersRepository from './banners.repository';
import { Type } from 'aws-sdk/clients/cloudformation';

@Injectable()
export default class BannersService {
  [x: string]: any;
  constructor(
    @InjectModel('Banners')
    private readonly bannersModel: Model<BannersDocument>,

    private readonly bannersRepository: BannersRepository,
  ) {}

  async updateOneById(
    id: Types.ObjectId,
    body: UpdateBannersDto,
  ): Promise<Banners> {
    const updated = await this.bannersModel.findByIdAndUpdate(id, body, {
      new: true,
    });
  
    if (!updated) {
      throw new NotFoundException('Banners not found');
    }
  
    return updated;
  }

  async deleteOneHardById(id: Types.ObjectId): Promise<any> {
    return this.bannersRepository.deleteOneHardById(id);
  }

  async findAll(): Promise<Banners[]> {
    return this.bannersModel.find().exec();
  }

  async findManyBy(query: any): Promise<Banners[]> {
    return this.bannersModel.find(query?.filter || {}).exec();
  }

  async create(createBannersDto: CreateBannersDto): Promise<Banners> {
    const banners = new this.bannersModel(createBannersDto);
    return banners.save();
  }
}