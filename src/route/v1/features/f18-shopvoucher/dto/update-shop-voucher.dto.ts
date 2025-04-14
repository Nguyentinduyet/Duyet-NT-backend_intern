import { PartialType } from '@nestjs/mapped-types';
import CreateShopvoucherDto from './create-shop-voucher.dto';

export default class UpdateShopvoucherDto extends PartialType(CreateShopvoucherDto) {}
