import BaseRepository from '@base-inherit/base.repository';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PaginateModel } from 'mongoose';
import { Shopvoucher, ShopvoucherDocument } from './schemas/shop-voucher.schema';

@Injectable()
export default class ShopvoucherRepository extends BaseRepository<ShopvoucherDocument> {
  constructor(
    @InjectModel(Shopvoucher.name)
    model: PaginateModel<ShopvoucherDocument>,
  ) {
    super(model);
  }
  
}