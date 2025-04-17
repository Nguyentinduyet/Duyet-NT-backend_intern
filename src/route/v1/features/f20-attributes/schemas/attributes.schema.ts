import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true, versionKey: false, collection: 'Attributes' })
export class Attributes {
  @Prop({ type: String, required: true })
  creatorId: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  valueType: string;

}

export type AttributesDocument = Attributes & Document;
export const AttributesSchema = SchemaFactory.createForClass(Attributes);
