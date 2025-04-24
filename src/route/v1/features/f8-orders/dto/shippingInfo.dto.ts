import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class ShippingInfoDto {
    @IsString()
    name: string;
  
    @IsNumber()
    price: number;
  
    @IsNotEmpty()
    fromDate: Date;
  
    @IsNotEmpty()
    toDate: Date;
  }
  