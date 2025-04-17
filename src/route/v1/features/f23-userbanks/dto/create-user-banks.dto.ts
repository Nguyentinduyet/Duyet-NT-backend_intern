import { Types } from 'aws-sdk/clients/acm';
import { IsBoolean, IsNotEmpty, IsOptional, IsString, IsArray, IsDateString, IsNumber, IsMongoId, IsPhoneNumber } from 'class-validator';

export default class CreateUserbanksDto {
  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsNotEmpty()
  @IsString()
  bankId: string;

  @IsOptional()
  @IsString()
  accountName: string;

  @IsOptional()
  @IsString()
  accountNumber: string;

  @IsOptional()
  holder: string;

  @IsOptional()
  @IsString()
  password: string;

  @IsOptional()
  @IsPhoneNumber('VN') 
  phone: string;

  @IsOptional()
  @IsDateString()
  expirationDate: string;

  @IsOptional()
  @IsString()
  cvv: string;

}