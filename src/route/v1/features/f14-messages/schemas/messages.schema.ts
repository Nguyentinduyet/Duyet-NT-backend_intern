import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true, versionKey: false, collection: 'branches' })
export class Messages {
  @Prop({ type: Types.ObjectId, ref: 'Conversation', required: true })
  conversationId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  senderId: Types.ObjectId;

  @Prop()
  content?: string;

  @Prop([String])
  images?: string[];

  @Prop([String])
  videos?: string[];

  @Prop([{ type: Types.ObjectId, ref: 'User' }])
  seenBy?: Types.ObjectId[];

}

export type MessagesDocument = Messages & Document;
export const MessagesSchema = SchemaFactory.createForClass(Messages);
