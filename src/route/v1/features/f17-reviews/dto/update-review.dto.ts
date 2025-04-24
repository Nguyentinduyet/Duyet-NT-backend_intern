import { PartialType } from '@nestjs/mapped-types';
import CreateReviewDto from './create-review.dto';
import { IsInt, IsOptional, IsString, Max, Min } from 'class-validator';

export default class UpdateReviewDto extends PartialType(CreateReviewDto) {

@IsOptional()
  @IsString()
  content?: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(5)
  rating?: number;

  @IsOptional()
  @IsString({ each: true })
  media?: string[];
}