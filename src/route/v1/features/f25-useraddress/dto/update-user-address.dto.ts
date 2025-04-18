import { PartialType } from '@nestjs/mapped-types';
import CreateUseraddressDto from './create-user-address.dto';

export default class UpdateUseraddressDto extends PartialType(CreateUseraddressDto) {}
