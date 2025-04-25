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
}
