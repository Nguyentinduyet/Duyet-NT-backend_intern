import BaseRepository from '@base-inherit/base.repository';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PaginateModel } from 'mongoose';
import { Banks, BanksDocument } from './schemas/banks.schema';

@Injectable()
export default class BanksRepository extends BaseRepository<BanksDocument> {
  constructor(
    @InjectModel(Banks.name)
    model: PaginateModel<BanksDocument>,
  ) {
    super(model);
  }
  
}