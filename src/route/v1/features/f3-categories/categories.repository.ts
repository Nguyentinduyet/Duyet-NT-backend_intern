import BaseRepository from '@base-inherit/base.repository';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PaginateModel } from 'mongoose';
import { Category, CategoryDocument } from './schemas/categories.schema';

@Injectable()
export default class CategoriesRepository extends BaseRepository<CategoryDocument> {
  constructor(@InjectModel(Category.name) model: PaginateModel<CategoryDocument>) {
    super(model);
  }
}
