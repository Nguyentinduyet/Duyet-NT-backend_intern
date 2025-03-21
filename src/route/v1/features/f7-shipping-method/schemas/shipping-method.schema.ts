import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true, versionKey: false, collection: 'shops' })
export class ShippingMethod {
  @Prop({ required: true })
  shopId: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true, type: Number })
  cost: number;

  @Prop({ required: true })
  estimatedDeliveryTime: string;
}

export type ShippingMethodDocument = ShippingMethod & Document;
export const ShippingMethodSchema = SchemaFactory.createForClass(ShippingMethod);
