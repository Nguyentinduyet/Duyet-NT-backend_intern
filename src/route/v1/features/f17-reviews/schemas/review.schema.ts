import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true, versionKey: false, collection: 'Review' })
export class Review {
  @Prop({ type: String, ref: 'Order'  })
  orderId: string;

  @Prop({ type: String, ref: 'Product', required: true })
  productId: string;

  @Prop({ type: String, ref: 'Sku' })
  skuId: string;

  @Prop({ type: String, ref: 'Customer', required: true })
  customerId: string;

  @Prop({ required: true, min: 1, max: 5 })
  rating: number;

  @Prop([String])
  attachments: string[];

  @Prop({ type: String })
  content: string;

  @Prop({ default: 0 })
  likes: number;

  @Prop({ type: String, ref: 'Reply', required: false })
  replyId?: string;

}

export type ReviewDocument = Review & Document;
export const ReviewSchema = SchemaFactory.createForClass(Review);
