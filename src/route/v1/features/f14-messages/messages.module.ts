import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Messages, MessagesSchema } from './schemas/messages.schema';
import MessagesController from './messages.controller';
import MessagesRepository from './messages.repository';
import MessagesService from './messages.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Messages.name,
        schema: MessagesSchema,
      },
    ]),
  ],
  controllers: [MessagesController],
  providers: [MessagesService, MessagesRepository],
  exports: [MessagesService, MessagesRepository],
})
export default class MessagesModule {}
