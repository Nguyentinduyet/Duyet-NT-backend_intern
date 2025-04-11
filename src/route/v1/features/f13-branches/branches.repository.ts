import BaseRepository from '@base-inherit/base.repository';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PaginateModel } from 'mongoose';
import { Branches, BranchesDocument } from './schemas/branches.schema';

@Injectable()
export default class BranchesRepository extends BaseRepository<BranchesDocument> {
  constructor(
    @InjectModel(Branches.name)
    model: PaginateModel<BranchesDocument>,
  ) {
    super(model);
  }
  
}