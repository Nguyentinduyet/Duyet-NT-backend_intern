import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true, versionKey: false, collection: 'Shopvoucher' })
export class Shopvoucher {
  @Prop({ type: Types.ObjectId, ref: 'Shop', required: true })
  shopId: String;

  @Prop({ required: true, unique: true })
  code: string;

  @Prop()
  image: string;

  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;

  @Prop({ enum: ['PERCENT', 'VALUE'], required: true })
  discountType: string;

  @Prop({ required: true })
  discountValue: number;

  @Prop()
  maxDiscountValue: number;

  @Prop()
  minOrderValue: number;

  @Prop()
  maxUses: number;

  @Prop({ default: 0 })
  usedCount: number;

  @Prop()
  maxUsesPerUser: number;

  @Prop({ default: true })
  isActive: boolean;

  @Prop({ default: false })
  isSendNotification: boolean;

  @Prop()
  nameEn: string;

  @Prop()
  descriptionEn: string;

  @Prop()
  validFrom: number;

  @Prop()
  validTo: number;

  @Prop({ type: [String] })
  applyTo: string[];

  @Prop({ String, ref: 'User' })
  customerIds: string[];
}

export type ShopvoucherDocument = Shopvoucher & Document;
export const ShopvoucherSchema = SchemaFactory.createForClass(Shopvoucher);
