import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true, versionKey: false, collection: 'orders' })
export class Orders {
  @Prop({ type: String, required: true })
  userId: string;

  @Prop({ type: String, required: true })
  shopId: string;

  @Prop({ type: String, required: false })
  discountId?: string;

  @Prop({ type: String, required: true })
  shippingMethodId: string;

  @Prop({ type: String, required: true })
  totalAmount: string;

  @Prop({ 
    type: String, 
    enum: ['pending', 'paid', 'shipped', 'cancelled'], 
    default: 'pending' 
  })
  status: 'pending' | 'paid' | 'shipped' | 'cancelled';
}

export type OrdersDocument = Orders & Document;
export const OrdersSchema = SchemaFactory.createForClass(Orders);
