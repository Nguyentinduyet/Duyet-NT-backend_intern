import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true, versionKey: false, collection: 'shops' })
export class OrderItems {
  @Prop({ type: Number, required: true })
  orderId: number;

  @Prop({ type: Number, required: true })
  productId: number;

  @Prop({ type: String, required: false, default: '' })
  skuId?: string;

  @Prop({ type: Number, required: true })
  quantity: number;

  @Prop({ type: Number, required: true })
  price: number;
}

export type OrderItemsDocument = OrderItems & Document;
export const OrderItemsSchema = SchemaFactory.createForClass(OrderItems);
