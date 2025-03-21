import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true, versionKey: false, collection: 'orders' })
export class Orders {
  @Prop({ type: Number, required: true })
  userId: number;

  @Prop({ type: Number, required: true })
  shopId: number;

  @Prop({ type: Number, required: false })
  discountId?: number;

  @Prop({ type: Number, required: true })
  shippingMethodId: number;

  @Prop({ type: Number, required: true })
  totalAmount: number;

  @Prop({ 
    type: String, 
    enum: ['pending', 'paid', 'shipped', 'cancelled'], 
    default: 'pending' 
  })
  status: 'pending' | 'paid' | 'shipped' | 'cancelled';
}

export type OrdersDocument = Orders & Document;
export const OrdersSchema = SchemaFactory.createForClass(Orders);
