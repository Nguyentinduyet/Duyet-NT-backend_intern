import { PartialType } from '@nestjs/mapped-types';
import CreateAttributesDto from './create-attributes.dto';

export default class UpdateAttributesDto extends PartialType(CreateAttributesDto) {}
