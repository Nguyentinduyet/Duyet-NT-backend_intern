import { PartialType } from '@nestjs/mapped-types';
import CreateConversationsDto from './create-conversations.dto';

export default class UpdateConversationsDto extends PartialType(CreateConversationsDto) {}
