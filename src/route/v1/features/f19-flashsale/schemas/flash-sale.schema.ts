import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true, versionKey: false, collection: 'Flashsale' })
export class Flashsale {
  @Prop({ type: String, required: true })
  creatorId: string;

  @Prop({ required: true })
  name: string;

  @Prop()
  nameEn: string;

  @Prop({ required: true })
  validFrom: number;

  @Prop({ required: true })
  validTo: number;

  @Prop({ type: [Types.ObjectId], default: [] })
  products: Types.ObjectId[];

  @Prop({ default: true })
  isActive: boolean;

}

export type FlashsaleDocument = Flashsale & Document;
export const FlashsaleSchema = SchemaFactory.createForClass(Flashsale);
