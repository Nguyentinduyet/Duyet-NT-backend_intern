import BaseRepository from '@base-inherit/base.repository';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PaginateModel, Types } from 'mongoose';
import { Messages, MessagesDocument } from './schemas/messages.schema';

@Injectable()
export default class MessagesRepository extends BaseRepository<MessagesDocument> {
  constructor(
    @InjectModel(Messages.name)
    model: PaginateModel<MessagesDocument>,
  ) {
    super(model);
  }

  async createOne(payload: Partial<MessagesDocument>) {
    return this.model.create(payload);
  }

  async getMessages(conversationId: string) {
    return this.model
      .find({ conversationId: new Types.ObjectId(conversationId) })
      .sort({ createdAt: 1 })
      .lean();
  }

  async markAsSeen(messageId: string, userId: string) {
    return this.model.updateOne(
      { _id: new Types.ObjectId(messageId) },
      { $addToSet: { seenBy: new Types.ObjectId(userId) } },
    );
  }

  async deleteOneHardById(id: string) {
    return this.model.findByIdAndDelete(new Types.ObjectId(id));
  }
}
