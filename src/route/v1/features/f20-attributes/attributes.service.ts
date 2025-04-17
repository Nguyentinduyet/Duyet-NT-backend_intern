import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Attributes, AttributesDocument } from './schemas/attributes.schema';
import CreateAttributesDto from './dto/create-attributes.dto';
import UpdateAttributesDto from './dto/update-attributes.dto';
import AttributesRepository from './attributes.repository';
import { Type } from 'aws-sdk/clients/cloudformation';

@Injectable()
export default class AttributesService {
  [x: string]: any;
  constructor(
    @InjectModel('Attributes')
    private readonly attributesModel: Model<AttributesDocument>,

    private readonly attributesRepository: AttributesRepository,
  ) {}

  async create(dto: CreateAttributesDto): Promise<Attributes> {
    const created = new this.attributesModel(dto);
    return created.save();
  }

  async findManyBy(condition: any): Promise<Attributes[]> {
    if (condition._id && !Types.ObjectId.isValid(condition._id)) {
      throw new BadRequestException('ID không hợp lệ');
    }

    return this.attributesModel.find(condition);
  }

  async updateOneById(
    id: Types.ObjectId,
    body: UpdateAttributesDto,
  ): Promise<Attributes> {
    const updated = await this.attributesModel.findByIdAndUpdate(id, body, {
      new: true,
    });

    if (!updated) {
      throw new NotFoundException('Attributes not found');
    }

    return updated;
  }

  async deleteOneHardById(id: Types.ObjectId): Promise<any> {
    return this.attributesRepository.deleteOneHardById(id);
  }

  async deleteManyHardByIds(ids: Types.ObjectId[]): Promise<any> {
    return await this.attributesModel.deleteMany({ _id: { $in: ids } });
  }
  async paginate(query: any): Promise<any> {
    const { page = 1, limit = 10 } = query;
    const skip = (page - 1) * limit;
    const data = await this.attributesModel.find().skip(skip).limit(limit).exec();
    const total = await this.attributesModel.countDocuments();
    return { data, total, page, limit };
  }

  async findOneBy(filter: any): Promise<any> {
    return await this.attributesModel.findOne(filter).exec();
  }

  async findOneById(id: Types.ObjectId, options: any = {}): Promise<any> {
    return await this.attributesModel.findById(id, options).exec();
  }

  async updateAttributes(creatorId: string, updateAttributesDto: UpdateAttributesDto) {
    try {
      const attributes = await this.attributesModel.findOne({ creatorId });
  
      if (!attributes) {
        throw new NotFoundException('Attributes not found');
      }
  
      Object.assign(attributes, updateAttributesDto);
      return await attributes.save();
    } catch (error) {
      console.error('Error finding attribute:', error);
      throw error;
    }
  }
  
}
