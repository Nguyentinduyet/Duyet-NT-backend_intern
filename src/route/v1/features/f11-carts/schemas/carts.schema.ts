import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true, versionKey: false, collection: 'shops' })
export class Carts {
  @Prop({ type: Types.ObjectId, required: true, ref: 'User' })
  userId: Types.ObjectId;

  @Prop([
    {
      productId: { type: Types.ObjectId, required: true, ref: 'Product' },
      skuId: { type: Types.ObjectId, required: true, ref: 'Sku' },
      quantity: { type: Number, required: true, min: 1 },
    },
  ])
  items: Array<{ productId: Types.ObjectId; skuId: Types.ObjectId; quantity: number }>;
}

export type CartsDocument = Carts & Document;
export const CartsSchema = SchemaFactory.createForClass(Carts);
