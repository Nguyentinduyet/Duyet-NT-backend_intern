import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Branches, BranchesSchema } from './schemas/branches.schema';
import BranchesController from './branches.controller';
import BranchesRepository from './branches.repository';
import BranchesService from './branches.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Branches.name,
        schema: BranchesSchema,
      },
    ]),
  ],
  controllers: [BranchesController],
  providers: [BranchesService, BranchesRepository],
  exports: [BranchesService, BranchesRepository],
})
export default class BranchesModule {}
