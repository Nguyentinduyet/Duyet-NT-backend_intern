import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true, versionKey: false, collection: 'Banks' })
export class Banks {
  @Prop({ required: true })
  name: string;

  @Prop()
  shortName: string;

  @Prop()
  branch: string;

  @Prop()
  thumbnail: string;

  @Prop({ default: true })
  isShow: boolean;
}

export type BanksDocument = Banks & Document;
export const BanksSchema = SchemaFactory.createForClass(Banks);
