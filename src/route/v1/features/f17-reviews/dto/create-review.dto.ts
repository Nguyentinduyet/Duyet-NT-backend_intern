import { IsNotEmpty, IsOptional, IsString, IsArray, IsDateString, IsNumber, IsMongoId, Max, Min, IsInt } from 'class-validator';

export default class CreateReviewDto {
 
  @IsMongoId()  // Đảm bảo đây là một ObjectId hợp lệ
  orderId: string;

  @IsNotEmpty()
  @IsMongoId()  // Đảm bảo đây là một ObjectId hợp lệ
  productId: string;


  @IsMongoId()  // Đảm bảo đây là một ObjectId hợp lệ
  skuId: string;

  @IsNotEmpty()
  @IsMongoId()  // Đảm bảo đây là một ObjectId hợp lệ
  customerId: string;

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
  likes?: number;

  @IsOptional()
  @IsMongoId()  // Nếu bạn có trường `replyId` là ObjectId
  replyId?: string;
}
