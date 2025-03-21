import BaseRepository from '@base-inherit/base.repository';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PaginateModel } from 'mongoose';
import { Orders, OrdersDocument } from './schemas/orders.schema';

@Injectable()
export default class OrdersRepository extends BaseRepository<OrdersDocument> {
  constructor(@InjectModel(Orders.name) model: PaginateModel<OrdersDocument>) {
    super(model);
  }
}
