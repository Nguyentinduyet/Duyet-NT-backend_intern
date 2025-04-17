import { PartialType } from '@nestjs/mapped-types';
import CreateBanksDto from './create-banks.dto';

export default class UpdateBanksDto extends PartialType(CreateBanksDto) {}
