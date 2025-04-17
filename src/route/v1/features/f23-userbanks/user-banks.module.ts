import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Userbanks, UserbanksSchema } from './schemas/user-banks.schema';
import UserbanksController from './user-banks.controller';
import UserbanksRepository from './user-banks.repository';
import UserbanksService from './user-banks.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Userbanks.name,
        schema: UserbanksSchema,
      },
    ]),
  ],
  controllers: [UserbanksController],
  providers: [UserbanksService, UserbanksRepository],
  exports: [UserbanksService, UserbanksRepository],
})
export default class UserbanksModule {}
