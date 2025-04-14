import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import ReviewController from './shop-voucher.controller';
import ReviewRepository from './shop-voucher.repository';
import ReviewService from './shop-voucher.service';
import { Shopvoucher, ShopvoucherSchema } from './schemas/shop-voucher.schema';


@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Shopvoucher.name,
        schema: ShopvoucherSchema,
      },
    ]),
  ],
  controllers: [ReviewController],
  providers: [ReviewService, ReviewRepository],
  exports: [ReviewService, ReviewRepository],
})
export default class ShopvoucherModule {
  [x: string]: any;
}
