import { Types } from 'aws-sdk/clients/acm';
import { IsBoolean, IsNotEmpty, IsOptional, IsString, IsArray, IsDateString, IsNumber, IsMongoId } from 'class-validator';

export default class CreateBrandsDto {
  @IsString()
  creatorId: string;

  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  thumbnail?: string;

  @IsOptional()
  @IsNumber()
  position?: number = 0;

  @IsOptional()
  @IsBoolean()
  isShow?: boolean = true;

}