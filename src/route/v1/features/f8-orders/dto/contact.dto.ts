import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class ContactDto {
    @IsOptional()
    @IsString()
    note: string;
  
    @IsString()
    @IsNotEmpty()
    contactName: string;
  
    @IsString()
    @IsNotEmpty()
    contactPhone: string;
  }