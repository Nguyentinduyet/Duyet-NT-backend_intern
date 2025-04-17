import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Userbanks, UserbanksDocument } from './schemas/user-banks.schema';
import CreateUserbanksDto from './dto/create-user-banks.dto';
import UpdateUserbanksDto from './dto/update-user-banks.dto';
import UserbanksRepository from './user-banks.repository';
import { Type } from 'aws-sdk/clients/cloudformation';

@Injectable()
export default class UserbanksService {
  [x: string]: any;
  constructor(
    @InjectModel('Userbanks')
    private readonly userbanksModel: Model<UserbanksDocument>,

    private readonly userbanksRepository: UserbanksRepository,
  ) {}

  async updateOneById(
    id: Types.ObjectId,
    body: UpdateUserbanksDto,
  ): Promise<Userbanks> {
    const updated = await this.userbanksModel.findByIdAndUpdate(id, body, {
      new: true,
    });
  
    if (!updated) {
      throw new NotFoundException('Userbanks not found');
    }
  
    return updated;
  }

  async deleteOneHardById(id: Types.ObjectId): Promise<any> {
    return this.userbanksRepository.deleteOneHardById(id);
  }

  async findAll(): Promise<Userbanks[]> {
    return this.userbanksModel.find().exec();
  }

  async findManyBy(query: any): Promise<Userbanks[]> {
    return this.userbanksModel.find(query?.filter || {}).exec();
  }

  async create(createUserbanksDto: CreateUserbanksDto): Promise<Userbanks> {
    const userbanks = new this.userbanksModel(createUserbanksDto);
    return userbanks.save();
  }
}