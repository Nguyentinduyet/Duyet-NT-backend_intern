import BaseService from '@base-inherit/base.service';
import CustomLoggerService from '@lazy-module/logger/logger.service';
import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { Conversations, ConversationsDocument } from './schemas/conversations.schema';
import ConversationsRepository from './conversations.repository';
import CreateConversationsDto from './dto/create-conversations.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import UpdateConversationsDto from './dto/update-conversations.dto';

@Injectable()
export default class ConversationsService {
  [x: string]: any;

  constructor(
    @InjectModel('Conversations') private readonly conversationsModel: Model<ConversationsDocument>,

    private readonly conversationsRepository: ConversationsRepository,
  ) {}

  async create(dto: CreateConversationsDto): Promise<Conversations> {
    const created = new this.conversationsModel(dto);
    return created.save();
  }

  async findManyBy(condition: any): Promise<Conversations[]> {
    console.log('this.conversationsRepository:', this.conversationsRepository);
    if (condition._id && !Types.ObjectId.isValid(condition._id)) {
      throw new BadRequestException('ID không hợp lệ');
    }

    return this.conversationsRepository.find(condition);
  }

  async created(dto: CreateConversationsDto): Promise<Conversations> {
    const created = new this.conversationsModel(dto);
    return created.save();
  }

  async updateOneById(id: Types.ObjectId, body: UpdateConversationsDto): Promise<any> {
    const updated = await this.conversationsModel.findByIdAndUpdate(id, body, {
      new: true,
    });

    if (!updated) {
      throw new NotFoundException('Branch not found');
    }

    return updated;
  }
  async deleteOneHardById(id: Types.ObjectId): Promise<any> {
    return this.conversationsRepository.deleteOneHardById(id);
  }
}
