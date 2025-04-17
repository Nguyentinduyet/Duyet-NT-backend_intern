import { Types } from 'aws-sdk/clients/acm';
import { IsBoolean, IsNotEmpty, IsOptional, IsString, IsArray, IsDateString, IsNumber, IsMongoId } from 'class-validator';

export default class CreateAttributesDto {
  @IsNotEmpty()
  @IsMongoId()
  readonly creatorId: string;

  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  readonly valueType: string;
}
