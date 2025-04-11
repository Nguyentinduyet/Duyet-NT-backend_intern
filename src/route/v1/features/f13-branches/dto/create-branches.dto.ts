import { IsBoolean, IsNotEmpty, IsOptional, IsString, IsArray, IsDateString, IsNumber } from 'class-validator';

export default class CreateBranchesDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsNotEmpty()
  @IsString()
  code: string;

  @IsNotEmpty()
  @IsString()
  provinceId: string;

  @IsNotEmpty()
  @IsString()
  districtId: string;

  @IsNotEmpty()
  @IsString()
  villageId: string;

  @IsOptional()
  @IsString()
  street?: string;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
