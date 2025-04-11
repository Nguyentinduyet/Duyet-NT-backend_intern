import { Types } from 'aws-sdk/clients/acm';
import { IsBoolean, IsNotEmpty, IsOptional, IsString, IsArray, IsDateString, IsNumber, IsMongoId } from 'class-validator';

export default class CreateMessagesDto {
  @IsMongoId()
  conversationId: string;

  @IsMongoId()
  senderId: string;

  @IsOptional()
  @IsString()
  content?: string;

  @IsOptional()
  @IsArray()
  images?: string[];

  @IsOptional()
  @IsArray()
  videos?: string[];
}
