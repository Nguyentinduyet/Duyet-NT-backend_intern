import { PartialType } from '@nestjs/mapped-types';
import CreateOrderItemsDto from './create-orderItems.dto';

export default class UpdateOrderItemsDto extends PartialType(CreateOrderItemsDto) {}
