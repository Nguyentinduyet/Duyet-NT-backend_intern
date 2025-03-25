import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

export type CartsDocument = Carts & Document;

@Schema({ timestamps: true, versionKey: false, collection: 'carts' })

export class Carts {
  @Prop({ required: true, type: Types.ObjectId, ref: 'User' }) // 🔹 Đổi userId thành ObjectId
  userId: Types.ObjectId;
  

  @Prop({
    type: [{ 
      productId: { type: Types.ObjectId, ref: 'Product', required: true }, // 🔹 Đổi productId thành ObjectId
      sku: { type: String, required: true },
      price: { type: Number, required: true, default: 0 },
      quantity: { type: Number, required: true, min: 1 }
    }], 
    default: []
  })
  items: { productId: Types.ObjectId; sku: string; price: number; quantity: number }[];
  @Prop({ type: String, ref: 'Sku', required: true })
  
  @Prop({ default: 0 })
  total: number;
}

export const CartsSchema = SchemaFactory.createForClass(Carts);
CartsSchema.plugin(mongoosePaginate);
