import { IsBoolean, IsNotEmpty, IsOptional, IsString, IsArray, IsDateString, IsNumber, IsMongoId, ArrayMinSize } from 'class-validator';

export default class CreateConversationsDto {
  @IsArray()
  @ArrayMinSize(2)
  @IsMongoId({ each: true })
  userIds: string[];
}
