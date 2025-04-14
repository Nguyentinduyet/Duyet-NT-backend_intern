import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true, versionKey: false, collection: 'News' })
export class News {
  @Prop({ type: String, ref: 'User', required: true })
  creatorId: string;

  @Prop({ required: true })
  title: string;

  @Prop()
  thumbnail: string;

  @Prop()
  description: string;

  @Prop()
  content: string;

  @Prop({ default: 0 })
  viewsCount: number;

  @Prop({ default: 'vi' })
  lang: string;

}

export type NewsDocument = News & Document;
export const NewsSchema = SchemaFactory.createForClass(News);
