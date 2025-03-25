import BaseRepository from '@base-inherit/base.repository';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PaginateModel } from 'mongoose';
import { OrderItems, OrderItemsDocument } from './schemas/order-items.schema';

@Injectable()
export default class OrderItemsRepository extends BaseRepository<OrderItemsDocument> {
  constructor(@InjectModel(OrderItems.name) model: PaginateModel<OrderItemsDocument>) {
    super(model);
  }
}
