import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Banks, BanksDocument } from './schemas/banks.schema';
import CreateBanksDto from './dto/create-banks.dto';
import UpdateBanksDto from './dto/update-banks.dto';
import BanksRepository from './banks.repository';
import { Type } from 'aws-sdk/clients/cloudformation';

@Injectable()
export default class BanksService {
  [x: string]: any;
  constructor(
    @InjectModel('Banks')
    private readonly banksModel: Model<BanksDocument>,

    private readonly banksRepository: BanksRepository,
  ) {}

  async updateOneById(
    id: Types.ObjectId,
    body: UpdateBanksDto,
  ): Promise<Banks> {
    const updated = await this.banksModel.findByIdAndUpdate(id, body, {
      new: true,
    });
  
    if (!updated) {
      throw new NotFoundException('Banks not found');
    }
  
    return updated;
  }

  async deleteOneHardById(id: Types.ObjectId): Promise<any> {
    return this.banksRepository.deleteOneHardById(id);
  }

  async findAll(): Promise<Banks[]> {
    return this.banksModel.find().exec();
  }

  async findManyBy(query: any): Promise<Banks[]> {
    return this.banksModel.find(query?.filter || {}).exec();
  }

  async createdd(createBanksDto: CreateBanksDto): Promise<Banks> {
    const banks = new this.banksModel(createBanksDto);
    return banks.save();
  }
  async create(createBanksDto: CreateBanksDto): Promise<Banks> {
    const createdBanks = new this.banksModel(createBanksDto);
    return createdBanks.save();
  }
}