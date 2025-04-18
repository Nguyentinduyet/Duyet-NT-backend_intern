import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Useraddress, UseraddressSchema } from './schemas/user-address.schema';
import UseraddressController from './user-address.controller';
import UseraddressRepository from './user-address.repository';
import UseraddressService from './user-address.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Useraddress.name,
        schema: UseraddressSchema,
      },
    ]),
  ],
  controllers: [UseraddressController],
  providers: [UseraddressService, UseraddressRepository],
  exports: [UseraddressService, UseraddressRepository],
})
export default class UseraddressModule {}
