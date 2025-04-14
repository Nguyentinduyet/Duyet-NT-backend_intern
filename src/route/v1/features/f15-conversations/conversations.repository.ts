import BaseRepository from '@base-inherit/base.repository';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PaginateModel } from 'mongoose';
import { Conversations, ConversationsDocument } from './schemas/conversations.schema';

@Injectable()
export default class ConversationsRepository extends BaseRepository<ConversationsDocument> {
  constructor(
    @InjectModel(Conversations.name)
    model: PaginateModel<ConversationsDocument>,
  ) {
    super(model);
  }
  
}