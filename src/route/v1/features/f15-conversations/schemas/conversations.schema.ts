import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true, versionKey: false, collection: 'conversations' })
export class Conversations {
  @Prop({ type: [String], ref: 'Users', required: true })
  userIds: String[];

  @Prop({ type: Types.ObjectId, ref: 'Messages', default: null })
  lastMessage: Types.ObjectId | null;

}

export type ConversationsDocument = Conversations & Document;
export const ConversationsSchema = SchemaFactory.createForClass(Conversations);
