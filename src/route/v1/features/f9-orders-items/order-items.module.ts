import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderItems, OrderItemsSchema } from './schemas/order-items.schema';
import OrderItemsController from './order-items.controller';
import OrderItemsRepository from './order-items.repository';
import OrderItemsService from './order-items.service';

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
