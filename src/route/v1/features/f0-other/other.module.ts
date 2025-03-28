import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import OtherController from './other.controller';
import OtherRepository from './other.repository';
import OtherService from './other.service';
import { Other, OtherSchema } from './schemas/other.schema';
import CartsModule from '../f11-carts/carts.module';
import ShippingMethodModule from '../f7-shipping-method/shipping-method.module';
import DiscountsModule from '../f6-discounts/discounts.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Other.name,
        schema: OtherSchema,
      },
    ]),
    CartsModule,
    ShippingMethodModule,
    DiscountsModule,
  ],
  controllers: [OtherController],
  providers: [OtherService, OtherRepository],
  exports: [OtherService, OtherRepository],
})
export default class OtherModule {}
