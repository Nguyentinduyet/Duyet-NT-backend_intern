import BaseService from '@base-inherit/base.service';
import CustomLoggerService from '@lazy-module/logger/logger.service';
import { Injectable } from '@nestjs/common';
import {  Category, CategoryDocument } from './schemas/categories.schema';
import CategoriesRepository from './categories.repository';


@Injectable()
export default class CategoriesService extends BaseService<CategoryDocument> {
  constructor(
    readonly logger: CustomLoggerService,
    readonly testRepository: CategoriesRepository,
  ) {
    super(logger, testRepository);
  }
}
