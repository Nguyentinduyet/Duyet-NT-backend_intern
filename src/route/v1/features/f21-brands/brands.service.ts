import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Brands, BrandsDocument } from './schemas/brands.schema';
import CreateBrandsDto from './dto/create-brands.dto';
import UpdateBrandsDto from './dto/update-brands.dto';
import BrandsRepository from './brands.repository';
import { Type } from 'aws-sdk/clients/cloudformation';

@Injectable()
export default class BrandsService {
  [x: string]: any;
  constructor(
    @InjectModel('Brands')
    private readonly brandsModel: Model<BrandsDocument>,

    private readonly brandsRepository: BrandsRepository,
  ) {}

  async updateOneById(
    id: Types.ObjectId,
    body: UpdateBrandsDto,
  ): Promise<Brands> {
    const updated = await this.brandsModel.findByIdAndUpdate(id, body, {
      new: true,
    });
  
    if (!updated) {
      throw new NotFoundException('Brands not found');
    }
  
    return updated;
  }

  async deleteOneHardById(id: Types.ObjectId): Promise<any> {
    return this.brandsRepository.deleteOneHardById(id);
  }
}