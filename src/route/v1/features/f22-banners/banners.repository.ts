import BaseRepository from '@base-inherit/base.repository';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PaginateModel } from 'mongoose';
import { Banners, BannersDocument } from './schemas/banners.schema';

@Injectable()
export default class BannersRepository extends BaseRepository<BannersDocument> {
  constructor(
    @InjectModel(Banners.name)
    model: PaginateModel<BannersDocument>,
  ) {
    super(model);
  }
  
}