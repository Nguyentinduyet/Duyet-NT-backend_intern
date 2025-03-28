import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { OrderStatus } from '../enums/orders-status.enum';

@Schema({ timestamps: true, versionKey: false, collection: 'orders' })
export class Orders extends Document {
  @Prop({ type: String, required: true })
  userId: string;

  @Prop({ type: String, required: true })
  shopId: string;

  @Prop({ type: String, required: true })
  discountId?: string;

  @Prop({ type: String, required: true })
  shippingMethodId: string;

  @Prop({ type: Number, required: true }) 
  totalAmount: number;

  @Prop({
    type: [
      {
        productId: { type: Types.ObjectId, ref: 'Product', required: true },
        quantity: { type: Number, required: true, min: 1 },
        price: { type: Number, required: true },
      }
    ],
    default: []
  })
  items: { productId: Types.ObjectId; quantity: number; price: number }[];

  @Prop({ 
    type: String, 
    enum: ['pending', 'paid', 'shipped', 'cancelled'], 
    default: 'pending' 
  })

  @Prop({ type: String, enum: OrderStatus, default: OrderStatus.Pending })
  status: OrderStatus;

  checkout: {
    totalAmount: number;
    shippingCost: number;
    subTotal: number; // tong tien sp
    discountAmount: number; // tong tien giam gia
  };

}

export const OrdersSchema = SchemaFactory.createForClass(Orders);
