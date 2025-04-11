import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true, versionKey: false, collection: 'branches' })
export class Branches {
  @Prop({ required: true })
  name: string;

  @Prop()
  description?: string;

  @Prop({ unique: true })
  code: string;

  @Prop({ type: Types.ObjectId, ref: 'Province' })
  provinceId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'District' })
  districtId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Village' })
  villageId: Types.ObjectId;

  @Prop()
  street: string;

  @Prop({ default: true })
  isActive: boolean;

}

export type BranchesDocument = Branches & Document;
export const BranchesSchema = SchemaFactory.createForClass(Branches);
