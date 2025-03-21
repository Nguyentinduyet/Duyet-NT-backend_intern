import BaseRepository from '@base-inherit/base.repository';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PaginateModel } from 'mongoose';
import { Carts, CartsDocument } from './schemas/carts.schema';

@Injectable()
export default class CartsRepository extends BaseRepository<CartsDocument> {
  constructor(@InjectModel(Carts.name) model: PaginateModel<CartsDocument>) {
    super(model);
  }
}
