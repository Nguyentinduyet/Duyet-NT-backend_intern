import BaseService from '@base-inherit/base.service';
import CustomLoggerService from '@lazy-module/logger/logger.service';
import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { Messages, MessagesDocument } from './schemas/messages.schema';
import MessagesRepository from './messages.repository';
import CreateMessagesDto from './dto/create-messages.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import UpdateMessagesDto from './dto/update-messages.dto';

@Injectable()
export default class MessagesService {
  [x: string]: any;

  constructor(
    @InjectModel('Messages') private readonly messagesModel: Model<MessagesDocument>,

    private readonly messagesRepository: MessagesRepository,
  ) {}

  async create(dto: CreateMessagesDto): Promise<Messages> {
    const created = new this.messagesModel(dto);
    return created.save();
  }

  async findManyBy(condition: any): Promise<Messages[]> {
    if (condition._id && !Types.ObjectId.isValid(condition._id)) {
      throw new BadRequestException('ID không hợp lệ');
    }

    return this.messagesRepository.find(condition);
  }

  async created(dto: CreateMessagesDto): Promise<Messages> {
    const created = new this.messagesModel(dto);
    return created.save();
  }

  async updateOneById(id: Types.ObjectId, body: UpdateMessagesDto): Promise<any> {
    const updated = await this.messagesModel.findByIdAndUpdate(id, body, {
      new: true,
    });

    if (!updated) {
      throw new NotFoundException('Message not found');
    }

    return updated;
  }
  async deleteOneHardById(id: Types.ObjectId): Promise<any> {
    return this.messagesRepository.deleteManyHardByIds([id]);
  }
}
