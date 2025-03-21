import { IsBoolean, IsNotEmpty, IsOptional, IsString, IsNumber, IsMongoId} from 'class-validator';

export default class CreateNotificationsDto {
  @IsMongoId()
  senderId: string;

  @IsMongoId()
  recipientId: string;

  @IsMongoId()
  entityId: string;

  @IsString()
  notificationType: string;

  @IsString()
  entityName: string;

  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  thumbnail?: string;

  @IsOptional()
  @IsBoolean()
  isOpened?: boolean;

  @IsOptional()
  options?: Record<string, any>;
}
