import BaseRepository from '@base-inherit/base.repository';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PaginateModel } from 'mongoose';
import { Brands, BrandsDocument } from './schemas/brands.schema';

@Injectable()
export default class BrandsRepository extends BaseRepository<BrandsDocument> {
  constructor(
    @InjectModel(Brands.name)
    model: PaginateModel<BrandsDocument>,
  ) {
    super(model);
  }
  
}