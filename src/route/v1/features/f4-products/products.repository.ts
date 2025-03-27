import BaseRepository from '@base-inherit/base.repository';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PaginateModel } from 'mongoose';
import { Products, ProductsDocument } from './schemas/products.schema';

@Injectable()
export default class ProductsRepository extends BaseRepository<ProductsDocument> {
  constructor(
    @InjectModel(Products.name) model: PaginateModel<ProductsDocument>,
  ) {
    super(model); // ✅ Gọi `super(model);` để truyền vào BaseRepository
  }

  async findById(id: string): Promise<ProductsDocument | null> {
    return this.model.findById(id).exec();
  }

  async findOneBy(condition: any): Promise<ProductsDocument | null> {
    return this.model.findOne(condition).exec();
  }
}
