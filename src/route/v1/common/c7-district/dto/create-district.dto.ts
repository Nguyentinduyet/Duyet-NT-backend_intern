import { IsMongoId, IsNumber, IsOptional, IsString } from 'class-validator';
import { Types } from 'mongoose';

export default class CreateDistrictDto {
  @IsOptional()
  @IsMongoId()
  readonly ProvinceId: String;

  @IsOptional()
  @IsString()
  readonly name: string;

  @IsOptional()
  @IsString()
  readonly slug: string;

  @IsOptional()
  @IsNumber()
  type: number;
}
