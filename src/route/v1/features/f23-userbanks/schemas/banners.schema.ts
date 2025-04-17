import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true, versionKey: false, collection: 'Banners' })
export class Banners {
  @Prop({ required: true })
  name: string;

  @Prop()
  image: string;

  @Prop()
  link: string;

  @Prop({ default: true })
  isShow: boolean;

  @Prop({ default: 0 })
  position: number;

}

export type BannersDocument = Banners & Document;
export const BannersSchema = SchemaFactory.createForClass(Banners);
