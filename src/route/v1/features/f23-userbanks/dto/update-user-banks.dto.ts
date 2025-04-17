import { PartialType } from '@nestjs/mapped-types';
import CreateUserbanksDto from './create-user-banks.dto';

export default class UpdateUserbanksDto extends PartialType(CreateUserbanksDto) {}
