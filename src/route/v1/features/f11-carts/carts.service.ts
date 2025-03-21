import BaseService from '@base-inherit/base.service';
import CustomLoggerService from '@lazy-module/logger/logger.service';
import { Injectable } from '@nestjs/common';
import { CartsDocument } from './schemas/carts.schema';
import CartsRepository from './carts.repository';

@Injectable()
export default class CartsService extends BaseService<CartsDocument> {
  constructor(
    readonly logger: CustomLoggerService,
    readonly testRepository: CartsRepository,
  ) {
    super(logger, testRepository);
  }
}
