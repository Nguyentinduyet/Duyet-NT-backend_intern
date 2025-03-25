import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true, versionKey: false, collection: 'shops' })
export class Carts {
  @Prop({ type: String, required: true, ref: 'User' })
  userId: String;

  @Prop([
    {
      productId: { type: String, required: true, ref: 'Product' },
      skuId: { type: String, required: true, ref: 'Sku' },
      quantity: { type: Number, required: true, min: 1 },
    },
  ])
  items: Array<{
    productId: String;
    skuId: String;
    quantity: number;
  }>;
  
}

export type CartsDocument = Carts & Document;
export const CartsSchema = SchemaFactory.createForClass(Carts);

