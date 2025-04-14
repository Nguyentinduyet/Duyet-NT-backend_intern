import { Types } from 'aws-sdk/clients/acm';
import { IsBoolean, IsNotEmpty, IsOptional, IsString, IsArray, IsDateString, IsNumber, IsMongoId, Max, Min } from 'class-validator';

export default class CreateReviewDto {
  @IsMongoId()
  orderId: string;

  @IsMongoId()
  productId: string;

  @IsMongoId()
  skuId: string;

  @IsMongoId()
  customerId: string;

  @IsNumber()
  @Min(1)
  @Max(5)
  rating: number;

  @IsOptional()
  @IsString({ each: true })
  attachments?: string[];

  @IsOptional()
  @IsString()
  content?: string;

  @IsOptional()
  @IsNumber()
  likes?: number;

  @IsOptional()
  @IsMongoId()
  replyId?: string;
}
