import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true, versionKey: false, collection: 'Userbanks' })
export class Userbanks {
  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  bankId: string;

  @Prop()
  accountName: string;

  @Prop()
  accountNumber: string;

  @Prop()
  holder: string;

  @Prop()
  password: string;

  @Prop()
  phone: string;

  @Prop()
  expirationDate: string;

  @Prop()
  cvv: string;
}

export type UserbanksDocument = Userbanks & Document;
export const UserbanksSchema = SchemaFactory.createForClass(Userbanks);
