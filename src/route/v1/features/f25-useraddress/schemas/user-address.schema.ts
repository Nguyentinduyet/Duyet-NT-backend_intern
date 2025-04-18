import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true, versionKey: false, collection: 'Useraddress' })
export class Useraddress {
  @Prop({ required: true })
  userId: string;

  @Prop()
  addressName: string;

  @Prop()
  contactName: string;

  @Prop()
  contactPhone: string;

  @Prop()
  provinceId: string;

  @Prop()
  districtId: string;

  @Prop()
  villageId: string;

  @Prop()
  street: string;

  @Prop()
  location: string;

  @Prop()
  note: string;

  @Prop()
  apartmentNumber: string;

  @Prop({ default: false })
  isDefault: boolean;
}

export type UseraddressDocument = Useraddress & Document;
export const UseraddressSchema = SchemaFactory.createForClass(Useraddress);
