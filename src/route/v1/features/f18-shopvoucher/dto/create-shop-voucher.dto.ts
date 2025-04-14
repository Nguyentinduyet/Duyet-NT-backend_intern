import { Types } from 'aws-sdk/clients/acm';
import { IsBoolean, IsNotEmpty, IsOptional, IsString, IsArray, IsDateString, IsNumber, IsMongoId, Max, Min } from 'class-validator';

export default class CreateShopvoucherDto {
  @IsString()
  shopId: string;

  @IsString()
  code: string;

  @IsOptional()
  @IsString()
  image?: string;

  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsString()
  discountType: string;

  @IsNumber()
  discountValue: number;

  @IsOptional()
  @IsNumber()
  maxDiscountValue?: number;

  @IsOptional()
  @IsNumber()
  minOrderValue?: number;

  @IsOptional()
  @IsNumber()
  maxUses?: number;

  @IsOptional()
  @IsNumber()
  maxUsesPerUser?: number;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @IsOptional()
  @IsBoolean()
  isSendNotification?: boolean;

  @IsOptional()
  @IsString()
  nameEn?: string;

  @IsOptional()
  @IsString()
  descriptionEn?: string;

  @IsOptional()
  @IsNumber()
  validFrom?: number;

  @IsOptional()
  @IsNumber()
  validTo?: number;

  @IsOptional()
  @IsArray()
  applyTo?: string[];

  @IsOptional()
  @IsArray()
  customerIds?: string[];
}
