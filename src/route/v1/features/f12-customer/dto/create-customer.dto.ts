import { IsBoolean, IsNotEmpty, IsOptional, IsString, IsArray, IsDateString, IsNumber } from 'class-validator';

export default class CreateCustomerDto {
  @IsString()
  userId: string;

  @IsOptional()
  @IsString()
  fullName?: string;

  @IsOptional()
  @IsString()
  gender?: string;

  @IsOptional()
  @IsString()
  avatar?: string;

  @IsOptional()
  socialPhone?: string;

  @IsOptional()
  socialEmail?: string;

  @IsOptional()
  contactPhone?: string;

  @IsOptional()
  contactEmail?: string;

  @IsOptional()
  referralId?: string;

  @IsOptional()
  myShareCode?: string;

  @IsOptional()
  sharedCodeFrom?: string;

  @IsOptional()
  @IsDateString()
  dateOfBirth?: Date;

  @IsOptional()
  balance?: number;

  @IsOptional()
  @IsArray()
  savedProductIds?: string[];

  @IsOptional()
  @IsArray()
  shopVoucherIds?: string[];

  @IsOptional()
  @IsArray()
  usedShopVoucherIds?: string[];

  @IsOptional()
  @IsNumber()
  points?: number;
}
