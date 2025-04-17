import BaseRepository from '@base-inherit/base.repository';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PaginateModel } from 'mongoose';
import { Attributes, AttributesDocument } from './schemas/attributes.schema';

@Injectable()
export default class AttributesRepository extends BaseRepository<AttributesDocument> {
  constructor(
    @InjectModel(Attributes.name)
    model: PaginateModel<AttributesDocument>,
  ) {
    super(model);
  }
  
}