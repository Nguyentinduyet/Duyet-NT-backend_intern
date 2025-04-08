import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true, versionKey: false, collection: 'customer' })
export class Customer {
  @Prop({ required: true, unique: true })
  userId: string;

  @Prop()
  fullName: string;

  @Prop()
  gender: string;

  @Prop()
  avatar: string;

  @Prop({ default: 0 })
  points: number;

  @Prop()
  socialPhone: string;

  @Prop()
  socialEmail: string;

  @Prop()
  contactPhone: string;

  @Prop()
  contactEmail: string;

  @Prop()
  referralId: string;

  @Prop()
  myShareCode: string;

  @Prop()
  sharedCodeFrom: string;

  @Prop()
  dateOfBirth: Date;

  @Prop({ default: 0 })
  balance: number;

  @Prop({ type: [Types.ObjectId], ref: 'Product' })
  savedProductIds: Types.ObjectId[];

  @Prop({ type: [Types.ObjectId], ref: 'ShopVoucher' })
  shopVoucherIds: Types.ObjectId[];

  @Prop({ type: [Types.ObjectId], ref: 'ShopVoucher' })
  usedShopVoucherIds: Types.ObjectId[];

}

export type CustomerDocument = Customer & Document;
export const CustomerSchema = SchemaFactory.createForClass(Customer);
