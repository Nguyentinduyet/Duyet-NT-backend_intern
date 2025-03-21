import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true, versionKey: false })
export class Notification {
  @Prop({ type: Types.ObjectId, required: true })
  senderId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, required: true })
  recipientId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, required: true })
  entityId: Types.ObjectId;

  @Prop({ type: String, required: true })
  notificationType: string;

  @Prop({ type: String, required: true })
  entityName: string;

  @Prop({ type: String, required: true })
  title: string;

  @Prop({ type: String, required: false })
  description?: string;

  @Prop({ type: String, required: false })
  thumbnail?: string;

  @Prop({ type: Boolean, default: false })
  isOpened: boolean;

  @Prop({ type: Object, required: false })
  options?: Record<string, any>;
}

export type NotificationDocument = Notification & Document;
export const NotificationSchema = SchemaFactory.createForClass(Notification);
