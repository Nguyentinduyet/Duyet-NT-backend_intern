import { IsMongoId, IsNumber, IsOptional, IsString } from 'class-validator';
import { Types } from 'mongoose';

export default class CreateVillageDto {
  @IsOptional()
  @IsMongoId()
  readonly provinceId: string;

  @IsOptional()
  @IsMongoId()
  readonly districtId: string;

  @IsOptional()
  @IsString()
  readonly name: string;

  @IsOptional()
  @IsString()
  readonly slug: string;

  @IsOptional()
  @IsString()
  type: string;
}
