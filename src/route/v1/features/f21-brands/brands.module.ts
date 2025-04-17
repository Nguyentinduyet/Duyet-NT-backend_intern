import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Brands, BrandsSchema } from './schemas/brands.schema';
import BrandsController from './brands.controller';
import BrandsRepository from './brands.repository';
import BrandsService from './brands.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Brands.name,
        schema: BrandsSchema,
      },
    ]),
  ],
  controllers: [BrandsController],
  providers: [BrandsService, BrandsRepository],
  exports: [BrandsService, BrandsRepository],
})
export default class BrandsModule {}
