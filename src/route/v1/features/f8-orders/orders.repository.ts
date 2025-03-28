import BaseRepository from '@base-inherit/base.repository';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PaginateModel } from 'mongoose';
import { Orders,  } from './schemas/orders.schema';
import { OrderItemsDocument } from '../f9-orders-items/schemas/order-items.schema';

@Injectable()
export default class OrdersRepository extends BaseRepository<OrderItemsDocument > {
  constructor(@InjectModel(Orders.name) model: PaginateModel<OrderItemsDocument>) {
    super(model);
  }
}
