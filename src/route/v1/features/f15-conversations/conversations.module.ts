import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Conversations, ConversationsSchema } from './schemas/conversations.schema';
import ConversationsController from './conversations.controller';
import ConversationsRepository from './conversations.repository';
import ConversationsService from './conversations.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Conversations.name,
        schema: ConversationsSchema,
      },
    ]),
  ],
  controllers: [ConversationsController],
  providers: [ConversationsService, ConversationsRepository],
  exports: [ConversationsService, ConversationsRepository],
})
export default class ConversationsModule {}
