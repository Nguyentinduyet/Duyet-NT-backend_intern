import { Type } from 'class-transformer';
import { IsNotEmpty, IsOptional, IsString, IsArray, IsMongoId, Max, Min, IsInt, IsNumber } from 'class-validator';

export default class CreateReviewDto {
  @IsMongoId()
  orderId: string;

  @IsNotEmpty()
  @IsMongoId()
  productId: string;


  @IsMongoId()
  skuId: string;

  @IsNotEmpty()
  @IsMongoId()
  customerId: string;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(5)
  rating: number;

  @IsArray()
  @IsOptional()
  attachments?: string[];

  @IsNotEmpty()
  @IsString()
  content: string;

  @IsOptional()
  @IsNumber()
  likes: number;

  @IsOptional()
  @IsMongoId()
  replyId?: string;
}
