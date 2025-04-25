import { IsDate, IsNotEmpty, IsString } from 'class-validator';

export default class StatusHistoryDto {
  @IsNotEmpty()
  @IsString()
  status: string;

  @IsNotEmpty()
  @IsDate()
  updatedAt: Date;
}