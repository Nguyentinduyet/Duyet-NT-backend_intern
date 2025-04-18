import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Useraddress, UseraddressDocument } from './schemas/user-address.schema';
import CreateUseraddressDto from './dto/create-user-address.dto';
import UpdateUseraddressDto from './dto/update-user-address.dto';
import UseraddressRepository from './user-address.repository';
import { Type } from 'aws-sdk/clients/cloudformation';

@Injectable()
export default class UseraddressService {
  [x: string]: any;
  constructor(
    @InjectModel('Useraddress')
    private readonly useraddressModel: Model<UseraddressDocument>,

    private readonly useraddressRepository: UseraddressRepository,
  ) {}

  async updateOneById(
    id: Types.ObjectId,
    body: UpdateUseraddressDto,
  ): Promise<Useraddress> {
    const updated = await this.useraddressModel.findByIdAndUpdate(id, body, {
      new: true,
    });
  
    if (!updated) {
      throw new NotFoundException('Useraddress not found');
    }
  
    return updated;
  }

  async deleteOneHardById(id: Types.ObjectId): Promise<any> {
    return this.useraddressRepository.deleteOneHardById(id);
  }

  async findAll(): Promise<Useraddress[]> {
    return this.useraddressModel.find().exec();
  }

  async findManyBy(query: any): Promise<Useraddress[]> {
    return this.useraddressModel.find(query?.filter || {}).exec();
  }

  async created(createUseraddressDto: CreateUseraddressDto): Promise<Useraddress> {
    const useraddress= new this.useraddressModel(createUseraddressDto);
    return useraddress.save();
  }
  async create(createUseraddressDto: CreateUseraddressDto): Promise<Useraddress> {
    const createdUseraddress = new this.useraddressModel(createUseraddressDto);
    return createdUseraddress.save();
  }
}