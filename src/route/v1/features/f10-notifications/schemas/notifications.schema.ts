import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type NotificationDocument = Notification & Document;

@Schema({ timestamps: true })
export class Notification {
  @Prop({ type: String, required: true })
  senderId: string;

  @Prop({ type: String, required: true })
  recipientId: string;

  @Prop({ type: String, required: true })
  entityId: string;

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

export const NotificationSchema = SchemaFactory.createForClass(Notification);
