import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Carts, CartsDocument } from '../f11-carts/schemas/carts.schema';
import CustomLoggerService from '@lazy-module/logger/logger.service';
import { Body, Injectable, NotFoundException } from '@nestjs/common';
import BaseService from '@base-inherit/base.service';
import { OrderItemsDocument } from '../f9-orders-items/schemas/order-items.schema';
import OrdersRepository from './orders.repository';

@Injectable()
export default class OrdersService extends BaseService<OrderItemsDocument> {
  [x: string]: any;

  constructor(
    readonly logger: CustomLoggerService,
    readonly testRepository: OrdersRepository,
    @InjectModel('Carts') private readonly cartsModel: Model<CartsDocument> // ✅ Inject model Carts
  ) {
    super(logger, testRepository);
  }

  async checkoutReview(cartId: string): Promise<any> {
    console.log('Received cartId:', cartId);

    if (!cartId) {
      throw new NotFoundException('cartId is required');
    }

    const cart = await this.cartsModel.findById(cartId).populate('items.productId');
  
    if (!cart) {
      throw new NotFoundException('Cart not found');
    }

    return {
      message: 'Cart found successfully',
      cartDetails: cart
    };
  }


    
    
    // Tính tổng tiền giảm giá (discountAmount)
   
    
    // Tổng tiền sản phẩm
        // Tổng tiền giảm giá
      
    


  // Kiểm tra xem items có phải là mảng không
   
 
    // Tính tổng tiền giảm giá (discountAmount)
   
   
  
}
