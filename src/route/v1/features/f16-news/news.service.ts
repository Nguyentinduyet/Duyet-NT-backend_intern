import BaseService from '@base-inherit/base.service';
import CustomLoggerService from '@lazy-module/logger/logger.service';
import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { Branches, BranchesDocument } from './schemas/branches.schema';
import BranchesRepository from './branches.repository';
import CreateBranchesDto from './dto/create-branches.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import UpdateBranchesDto from './dto/update-branches.dto';

@Injectable()
export default class BranchesService {
  [x: string]: any;

  constructor(
    @InjectModel('Branches') private readonly branchModel: Model<BranchesDocument>,

    private readonly branchesRepository: BranchesRepository,
  ) {}

  async create(dto: CreateBranchesDto): Promise<Branches> {
    const created = new this.branchesModel(dto);
    return created.save();
  }

  async findManyBy(condition: any): Promise<Branches[]> {
    if (condition._id && !Types.ObjectId.isValid(condition._id)) {
      throw new BadRequestException('ID không hợp lệ');
    }

    return this.branchesRepository.find(condition);
  }

  async created(dto: CreateBranchesDto): Promise<Branches> {
    const created = new this.branchesModel(dto);
    return created.save();
  }

  async updateOneById(id: Types.ObjectId, body: UpdateBranchesDto): Promise<any> {
    const updated = await this.branchModel.findByIdAndUpdate(id, body, {
      new: true,
    });

    if (!updated) {
      throw new NotFoundException('Branch not found');
    }

    return updated;
  }
  async deleteOneHardById(id: Types.ObjectId): Promise<any> {
    return this.branchesRepository.deleteOneHardById(id);
  }
}
