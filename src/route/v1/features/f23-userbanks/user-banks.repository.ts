import BaseRepository from '@base-inherit/base.repository';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PaginateModel } from 'mongoose';
import { Userbanks, UserbanksDocument } from './schemas/user-banks.schema';

@Injectable()
export default class UserbanksRepository extends BaseRepository<UserbanksDocument> {
  constructor(
    @InjectModel(Userbanks.name)
    model: PaginateModel<UserbanksDocument>,
  ) {
    super(model);
  }
  
}