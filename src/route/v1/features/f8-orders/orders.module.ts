import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Orders, OrdersSchema } from './schemas/orders.schema';
import OrdersController from './orders.controller';
import OrdersRepository from './orders.repository';
import OrdersService from './orders.service';
import { Carts, CartsSchema } from '../f11-carts/schemas/carts.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Carts.name, schema: CartsSchema },
      {
        name: Orders.name,
        schema: OrdersSchema,
      }
    ]),
  ],
  controllers: [OrdersController],
  providers: [OrdersService, OrdersRepository],
  exports: [OrdersService, OrdersRepository],
})
export default class OrdersModule {}
