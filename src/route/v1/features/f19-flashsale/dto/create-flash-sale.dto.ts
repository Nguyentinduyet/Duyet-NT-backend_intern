import { Types } from 'aws-sdk/clients/acm';
import { IsBoolean, IsNotEmpty, IsOptional, IsString, IsArray, IsDateString, IsNumber, IsMongoId } from 'class-validator';

export default class CreateFlashsaleDto {
  @IsMongoId()
  creatorId: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  nameEn?: string;

  @IsNumber()
  validFrom: number;

  @IsNumber()
  validTo: number;

  @IsArray()
  @IsMongoId({ each: true })
  products: string[];

  @IsBoolean()
  isActive: boolean;
}
