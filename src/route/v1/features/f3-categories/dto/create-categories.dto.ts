import { IsBoolean, IsNotEmpty, IsOptional, IsString, IsMongoId } from 'class-validator';

export default class CreateCategoriesDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsMongoId()
  @IsOptional()
  parentId?: string;
}
