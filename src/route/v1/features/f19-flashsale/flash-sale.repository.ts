import BaseRepository from '@base-inherit/base.repository';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PaginateModel } from 'mongoose';
import { Flashsale, FlashsaleDocument } from './schemas/flash-sale.schema';

@Injectable()
export default class FlashsaleRepository extends BaseRepository<FlashsaleDocument> {
  constructor(
    @InjectModel(Flashsale.name)
    model: PaginateModel<FlashsaleDocument>,
  ) {
    super(model);
  }
  
}