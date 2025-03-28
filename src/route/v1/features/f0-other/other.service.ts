import BaseService from '@base-inherit/base.service';
import CustomLoggerService from '@lazy-module/logger/logger.service';
import { BadRequestException, Injectable } from '@nestjs/common';

import OtherRepository from './other.repository';
import { OtherDocument } from './schemas/other.schema';
import CartsService from '../f11-carts/carts.service';
import ShippingMethodService from '../f7-shipping-method/shipping-method.service';
import DiscountsService from '../f6-discounts/discounts.service';
import CheckoutReviewDto from '../f8-orders/dto/checkout-review.dto';

@Injectable()
export default class OtherService extends BaseService<OtherDocument> {
  constructor(
    readonly logger: CustomLoggerService,
    readonly otherRepository: OtherRepository,
    readonly cartService: CartsService,
    readonly shippingMethodService: ShippingMethodService,
    readonly discountService: DiscountsService,
  ) {
    super(logger, otherRepository);
  }
  

  async checkout(userId: string, shopId: string) {
    return {
      message: 'Checkout thành công',
      userId,
      shopId,
      timestamp: new Date().toISOString(),
    };
  }
  
    // const inputReviewed = await this.orderService.checkoutReview(input
    // create order
    // create orderItems: inputREviewd.items.map(item => ({...item, orderId}))
    // remove items in  carts
    // reduce discount quantity
    // reduce product/sku stock
    // return order

   
    


}
