import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Orders, OrdersSchema } from './schemas/orders.schema';
import OrdersController from './orders.controller';
import OrdersRepository from './orders.repository';
import OrdersService from './orders.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Orders.name,
        schema: OrdersSchema,
      },
    ]),
  ],
  controllers: [OrdersController],
  providers: [OrdersService, OrdersRepository],
  exports: [OrdersService, OrdersRepository],
})
export default class OrdersModule {}
