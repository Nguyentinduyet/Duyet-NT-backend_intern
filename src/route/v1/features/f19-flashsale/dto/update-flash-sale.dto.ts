import { PartialType } from '@nestjs/mapped-types';
import CreateFlashsaleDto from './create-flash-sale.dto';

export default class UpdateFlashsaleDto extends PartialType(CreateFlashsaleDto) {}
