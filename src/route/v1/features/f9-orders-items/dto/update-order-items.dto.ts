import { PartialType } from '@nestjs/mapped-types';
import CreateOrderItemsDto from './create-order-items.dto';

export default class UpdateOrderItemsDto extends PartialType(CreateOrderItemsDto) {}
