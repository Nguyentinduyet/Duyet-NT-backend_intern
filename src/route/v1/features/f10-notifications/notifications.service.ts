import BaseService from '@base-inherit/base.service';
import CustomLoggerService from '@lazy-module/logger/logger.service';
import { Injectable } from '@nestjs/common';
import { NotificationDocument } from './schemas/notifications.schema';
import NotificationsRepository from './notifications.repository';

@Injectable()
export default class NotificationsService extends BaseService<NotificationDocument> {
  constructor(
    readonly logger: CustomLoggerService,
    readonly testRepository: NotificationsRepository,
  ) {
    super(logger, testRepository);
  }
}
