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

  @IsNumber()
  @IsNotEmpty()
  estimatedDeliveryTime: number;
}
