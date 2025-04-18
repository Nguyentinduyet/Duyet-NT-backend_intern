import BaseRepository from '@base-inherit/base.repository';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PaginateModel } from 'mongoose';
import { Useraddress, UseraddressDocument } from './schemas/user-address.schema';

@Injectable()
export default class UseraddressRepository extends BaseRepository<UseraddressDocument> {
  constructor(
    @InjectModel(Useraddress.name)
    model: PaginateModel<UseraddressDocument>,
  ) {
    super(model);
  }
  
  
}