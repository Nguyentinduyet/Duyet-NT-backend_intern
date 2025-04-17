import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Banks, BanksSchema } from './schemas/banks.schema';
import BanksController from './banks.controller';
import BanksRepository from './banks.repository';
import BanksService from './banks.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Banks.name,
        schema: BanksSchema,
      },
    ]),
  ],
  controllers: [BanksController],
  providers: [BanksService, BanksRepository],
  exports: [BanksService, BanksRepository],
})
export default class BanksModule {}
