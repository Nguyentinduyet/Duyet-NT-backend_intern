import BaseRepository from '@base-inherit/base.repository';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PaginateModel, Types } from 'mongoose';
import { Carts, CartsDocument } from './schemas/carts.schema';

@Injectable() // ✅ Thêm Injectable để NestJS có thể inject repository này
export default class CartsRepository extends BaseRepository<CartsDocument> {
  constructor(@InjectModel(Carts.name) private readonly cartModel: PaginateModel<CartsDocument>) {
    super(cartModel);
  }

}
