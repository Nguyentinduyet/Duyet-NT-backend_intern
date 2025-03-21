import { IsBoolean, IsNotEmpty, IsOptional, IsString, IsNumber} from 'class-validator';

export default class CreateShippingMethodDto {
  @IsString()
  @IsNotEmpty()
  shopId: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  cost: number;

  @IsString()
  @IsNotEmpty()
  estimatedDeliveryTime: string;
}
