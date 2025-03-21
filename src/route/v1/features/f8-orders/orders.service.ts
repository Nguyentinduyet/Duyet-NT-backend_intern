import BaseService from '@base-inherit/base.service';
import CustomLoggerService from '@lazy-module/logger/logger.service';
import { Injectable } from '@nestjs/common';
import { OrdersDocument } from './schemas/orders.schema';
import OrdersRepository from './orders.repository';

@Injectable()
export default class OrdersService extends BaseService<OrdersDocument> {
  constructor(
    readonly logger: CustomLoggerService,
    readonly testRepository: OrdersRepository,
  ) {
    super(logger, testRepository);
  }
}
