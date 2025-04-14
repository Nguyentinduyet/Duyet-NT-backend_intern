import { PartialType } from '@nestjs/mapped-types';
import CreateBranchesDto from './create-branches.dto';

export default class UpdateBranchesDto extends PartialType(CreateBranchesDto) {}
