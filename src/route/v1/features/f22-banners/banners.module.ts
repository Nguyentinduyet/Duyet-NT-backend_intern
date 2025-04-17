import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Banners, BannersSchema } from './schemas/banners.schema';
import BannersController from './banners.controller';
import BannersRepository from './banners.repository';
import BannersService from './banners.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Banners.name,
        schema: BannersSchema,
      },
    ]),
  ],
  controllers: [BannersController],
  providers: [BannersService, BannersRepository],
  exports: [BannersService, BannersRepository],
})
export default class BannersModule {}
