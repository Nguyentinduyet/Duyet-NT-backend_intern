import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Carts, CartsSchema } from './schemas/carts.schema';
import CartsController from './carts.controller';
import CartsRepository from './carts.repository';
import CartsService from './carts.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Carts.name,
        schema: CartsSchema,
      },
    ]),
  ],
  controllers: [CartsController],
  providers: [CartsService, CartsRepository],
  exports: [CartsService, CartsRepository],
})
export default class CartsModule {}
