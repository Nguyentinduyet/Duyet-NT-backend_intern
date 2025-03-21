import BaseService from '@base-inherit/base.service';
import CustomLoggerService from '@lazy-module/logger/logger.service';
import { Injectable } from '@nestjs/common';
import { OrderItemsDocument } from './schemas/orderItems.schema';
import OrderItemsRepository from './orderItems.repository';

@Injectable()
export default class OrderItemsService extends BaseService<OrderItemsDocument> {
  constructor(
    readonly logger: CustomLoggerService,
    readonly testRepository: OrderItemsRepository,
  ) {
    super(logger, testRepository);
  }
}
