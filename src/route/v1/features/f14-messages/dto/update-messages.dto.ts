import { PartialType } from '@nestjs/mapped-types';
import CreateMessagesDto from './create-messages.dto';

export default class UpdateMessagesDto extends PartialType(CreateMessagesDto) {}
