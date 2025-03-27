import BaseService from '@base-inherit/base.service';
import CustomLoggerService from '@lazy-module/logger/logger.service';
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CartsDocument } from './schemas/carts.schema';
import CartsRepository from './carts.repository';
import { Types } from 'mongoose';
import ProductsService from '../f4-products/products.service';

@Injectable()
export default class CartsService extends BaseService<CartsDocument> {
  [x: string]: any;
  constructor(
    readonly logger: CustomLoggerService,
    readonly cartRepository: CartsRepository,
    readonly productService: ProductsService,
  ) {
    
    super(logger, cartRepository);
  }

  async totalCart(userId: string, filter: any) {
    const cart = await this.cartRepository.findOneBy(
      { userId },
      {
        populate: {
          path: 'items',
          populate: { path: 'skuId' },
        },
      },
    );
    if (!cart) throw new NotFoundException('');

    console.log(cart);
    let total = 0;
    cart.items.forEach((item: any) => {
      console.log(item);
      total += item.skuId.price * item.quantity;
    });

    return total;
  }

  // ✅ Thêm sản phẩm vào giỏ hàng
  async addToCart(userId: string, productId: string, sku: string = '', quantity: number = 1) {
    if (!Types.ObjectId.isValid(userId) || !Types.ObjectId.isValid(productId)) {
        throw new BadRequestException('userId hoặc productId không hợp lệ');
    }

    if (!sku || typeof sku !== 'string') {
        throw new BadRequestException('SKU phải là một chuỗi hợp lệ');
    }

    if (!quantity || quantity < 1 || typeof quantity !== 'number') {
        throw new BadRequestException('Số lượng phải là một số >= 1');
    }

    return await this.cartRepository.addToCart(userId, productId, sku, quantity);
}

async updateQuantity(userId: string, productId: string, sku: string, quantity: number): Promise<CartsDocument> {
  if (!Types.ObjectId.isValid(userId) || !Types.ObjectId.isValid(productId)) {
      throw new BadRequestException('userId hoặc productId không hợp lệ');
  }

  const cart = await this.cartRepository.getCart(userId);
  if (!cart) {
      throw new NotFoundException('Giỏ hàng không tồn tại');
  }

  if (quantity <= 0) {
      console.log("🗑 Xóa sản phẩm khỏi giỏ hàng:", { userId, productId, sku });

      const updatedCart = await this.cartRepository.removeFromCart(userId, productId, sku);
      if (!updatedCart) {
          throw new NotFoundException('Giỏ hàng không tồn tại sau khi xóa sản phẩm');
      }
      return updatedCart;
  }

  const updatedCart = await this.cartRepository.updateQuantity(userId, productId, sku, quantity);
  if (!updatedCart) {
      throw new NotFoundException('Sản phẩm không tồn tại trong giỏ hàng');
  }

  return updatedCart;
}



  // ❌ Xóa sản phẩm khỏi giỏ hàng
  async removeFromCart(userId: string, productId: string, sku: string): Promise<CartsDocument> {
    if (!Types.ObjectId.isValid(userId) || !Types.ObjectId.isValid(productId)) {
      throw new BadRequestException('userId hoặc productId không hợp lệ');
    }
  
    if (!userId || !productId || !sku) {
      throw new BadRequestException('Thiếu thông tin cần thiết');
    }
  
    const cart = await this.cartRepository.getCart(userId);
    if (!cart || cart.items.length === 0) {
      throw new NotFoundException('Giỏ hàng trống');
    }
  
    const itemIndex = cart.items.findIndex(
      (item) => item.productId.toString() === productId && item.sku === sku,
    );
  
    if (itemIndex === -1) {
      throw new NotFoundException('Sản phẩm không tồn tại trong giỏ hàng');
    }
  
    cart.items.splice(itemIndex, 1);
    await cart.save();
  
    return cart;
  }
  
}