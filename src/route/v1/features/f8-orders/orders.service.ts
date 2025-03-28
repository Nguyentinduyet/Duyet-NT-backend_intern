import BaseService from '@base-inherit/base.service';
import CustomLoggerService from '@lazy-module/logger/logger.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import OrdersRepository from './orders.repository';
import { OrderItemsDocument } from '../f9-orders-items/schemas/order-items.schema';


@Injectable()
export default class OrdersService extends BaseService<OrderItemsDocument> {
  [x: string]: any;
  constructor(
    readonly logger: CustomLoggerService,
    readonly testRepository: OrdersRepository,
  ) {
    super(logger, testRepository);
  }

 
    // Tính tổng tiền sản phẩm (subTotal)
    async checkoutReview(cartId: string) {
      const cart = await this.cartsRepository.findOneById(cartId, {
        populate: [{ path: 'items.productId' }, { path: 'items.skuId' }],
      });
    
      if (!cart) {
        throw new NotFoundException('Cart not found');
      }
    
      let totalAmount = 0;
      let discountAmount = 0;
      let outOfStockItems: { productId: any; available: any; }[] = [];
  
      cart.items.forEach((item: any) => {
        if (item.skuId.stock < item.quantity) {
          outOfStockItems.push({
            productId: item.productId,
            available: item.skuId.stock,
          });
        }
        totalAmount += item.skuId.price * item.quantity;
    
        if (item.skuId.discount) {
          discountAmount += (item.skuId.price * item.skuId.discount) / 100;
        }
      });
    
      return {
        cartId,
        totalAmount,
        discountAmount,
        finalAmount: totalAmount - discountAmount,
        outOfStockItems,
        canCheckout: outOfStockItems.length === 0,
      };
    }
    
    
    // Tính tổng tiền giảm giá (discountAmount)
   
    
    // Tổng tiền sản phẩm
        // Tổng tiền giảm giá
      
    


  // Kiểm tra xem items có phải là mảng không
   
 
    // Tính tổng tiền giảm giá (discountAmount)
   
   
  
}
