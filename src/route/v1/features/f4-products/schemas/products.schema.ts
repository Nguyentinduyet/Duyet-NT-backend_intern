import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true, versionKey: false, collection: 'products' })
export class Products {
  @Prop({ type: String, ref: 'Shop', required: true })
  shopId: string;

  @Prop({ type: Types.ObjectId, ref: 'Categorie', required: true })
  categoryId: string;

  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;

  @Prop({ required: true })
  price: number;

  @Prop({ default: true })
  isActive: boolean;

  @Prop({ type: [String], default: [] })
  images: string[];
}

export type ProductsDocument = Products & Document;
export const ProductsSchema = SchemaFactory.createForClass(Products);
//Thêm text index vào schema để hỗ trợ tìm kiếm
ProductsSchema.index({ name: 'text', description: 'text' });
