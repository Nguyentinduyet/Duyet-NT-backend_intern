import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true, versionKey: false, collection: 'Brands' })
export class Brands {
  @Prop({ required: true })
  creatorId: string;

  @Prop({ required: true })
  name: string;

  @Prop()
  thumbnail: string;

  @Prop()
  position: number;

  @Prop({ default: true })
  isShow: boolean;

}

export type BrandsDocument = Brands & Document;
export const BrandsSchema = SchemaFactory.createForClass(Brands);
