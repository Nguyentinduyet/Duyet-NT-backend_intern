import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { OrderStatus } from '../enums/orders-status.enum';

@Schema({ timestamps: true, versionKey: false, collection: 'orders' })
export class Orders extends Document {
  @Prop({ type: String, ref: 'User', required: true })
  customerId: string;

  @Prop({
    type: {
      note: String,
      contactName: String,
      contactPhone: String,
    },
    required: true,
  })
  contact: {
    note: string;
    contactName: string;
    contactPhone: string;
  };

  @Prop({ type: String, ref: 'UserAddress' })
  userAddressId: string;

  @Prop({ type: String })
  provinceId: string;

  @Prop({ type: String })
  districtId: string;

  @Prop({ type: String })
  villageId: string;

  @Prop()
  street: string;

  @Prop()
  addressFull: string;

  @Prop({ unique: true, required: true })
  code: string;

  @Prop({ enum: ['COD', 'ATM', 'MOMO', 'CREDIT'], required: true })
  paymentMethod: 'COD' | 'ATM' | 'MOMO' | 'CREDIT';

  @Prop()
  paymentInfo: string;

  @Prop({ type: String, ref: 'Voucher' })
  shopVoucherId: string;

  @Prop({ enum: ['WAITING', 'CONFIRM', 'DELIVERY', 'SUCCESS', 'CANCEL', 'REFUND'], default: 'WAITING' })
  status: 'WAITING' | 'CONFIRM' | 'DELIVERY' | 'SUCCESS' | 'CANCEL' | 'REFUND';

  @Prop({
    type: {
      subTotal: Number,
      shippingCost: Number,
      discountAmount: Number,
      totalAmount: Number,
    },
    required: true,
  })
  checkout: {
    subTotal: number;
    shippingCost: number;
    discountAmount: number;
    totalAmount: number;
  };

  @Prop([
    {
      status: { type: String, enum: ['WAITING', 'CONFIRM', 'DELIVERY', 'SUCCESS', 'CANCEL', 'REFUND'] },
      changedAt: Date,
      changedBy: { type: String, ref: 'User' },
      changeReason: String,
      changeImages: [String],
    },
  ])
  statusHistories: {
    status: string;
    changedAt: Date;
    changedBy: string;
    changeReason: string;
    changeImages: string[];
  }[];

  @Prop({
    type: {
      name: String,
      price: Number,
      fromDate: Date,
      toDate: Date,
    },
  })
  shippingInfo: {
    name: string;
    price: number;
    fromDate: Date;
    toDate: Date;
  };

  @Prop({ type: String, ref: 'Shop' })
  shopId: string;
}

export const OrdersSchema = SchemaFactory.createForClass(Orders);
