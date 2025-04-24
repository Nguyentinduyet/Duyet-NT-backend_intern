import { IsString, IsArray, ValidateNested, IsNumber, IsEnum, Min, IsMongoId, IsOptional, IsNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';
import { ContactDto } from './contact.dto';
import { CheckoutDto } from './checkout.dto';
import { ShippingInfoDto } from './shippingInfo.dto';


export class CreateOrdersDto {
  @IsMongoId()
  @IsNotEmpty()
  customerId: string;

  @ValidateNested()
  @Type(() => ContactDto)
  contact: ContactDto;

  @IsMongoId()
  @IsOptional()
  userAddressId?: string;

  @IsMongoId()
  provinceId: string;

  @IsMongoId()
  districtId: string;

  @IsMongoId()
  villageId: string;

  @IsString()
  street: string;

  @IsString()
  addressFull: string;

  @IsString()
  @IsNotEmpty()
  code: string;

  @IsEnum(['COD', 'ATM', 'MOMO', 'CREDIT'])
  paymentMethod: 'COD' | 'ATM' | 'MOMO' | 'CREDIT';

  @IsString()
  @IsOptional()
  paymentInfo?: string;

  @IsMongoId()
  @IsOptional()
  shopVoucherId?: string;

  @IsEnum(['WAITING', 'CONFIRM', 'DELIVERY', 'SUCCESS', 'CANCEL', 'REFUND'])
  @IsOptional()
  status?: 'WAITING' | 'CONFIRM' | 'DELIVERY' | 'SUCCESS' | 'CANCEL' | 'REFUND';

  @ValidateNested()
  @Type(() => CheckoutDto)
  checkout: CheckoutDto;

  @ValidateNested()
  @Type(() => ShippingInfoDto)
  shippingInfo: ShippingInfoDto;

  @IsMongoId()
  @IsOptional()
  shopId?: string;
}
