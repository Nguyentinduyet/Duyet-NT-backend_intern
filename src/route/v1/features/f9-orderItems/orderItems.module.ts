import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderItems, OrderItemsSchema } from './schemas/orderItems.schema';
import OrderItemsController from './orderItems.controller';
import OrderItemsRepository from './orderItems.repository';
import OrderItemsService from './orderItems.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: OrderItems.name,
        schema: OrderItemsSchema,
      },
    ]),
  ],
  controllers: [OrderItemsController],
  providers: [OrderItemsService, OrderItemsRepository],
  exports: [OrderItemsService, OrderItemsRepository],
})
export default class OrderItemsModule {}
