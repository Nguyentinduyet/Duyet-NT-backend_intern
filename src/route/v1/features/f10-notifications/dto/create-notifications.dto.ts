import { IsBoolean, IsNotEmpty, IsOptional, IsString, IsNumber, IsMongoId} from 'class-validator';

export default class CreateNotificationsDto {
  @IsString()
  @IsNotEmpty()
  senderId: string;

  @IsString()
  @IsNotEmpty()
  recipientId: string;

  @IsString()
  @IsNotEmpty()
  entityId: string;

  @IsString()
  @IsNotEmpty()
  notificationType: string;

  @IsString()
  @IsNotEmpty()
  entityName: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  thumbnail?: string;

  @IsBoolean()
  @IsOptional()
  isOpened?: boolean;

  @IsOptional()
  options?: Record<string, any>;

}
