import BaseService from '@base-inherit/base.service';
import CustomLoggerService from '@lazy-module/logger/logger.service';
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CartsDocument } from './schemas/carts.schema';
import CartsRepository from './carts.repository';
import { Types } from 'mongoose';
import ProductsService from '../f4-products/products.service';
import AddItemDto from './dto/add-items.dto';

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

  async addItemToCart(cartId: string, input: AddItemDto) {
    const cart: CartsDocument = await this.cartRepository.findOneById(cartId);

    const itemIndex = cart.items.findIndex(
      (item) => item.productId == input.productId && item.skuId === input.skuId,
    );

    if (itemIndex === -1) {
      cart.items.push(input);
    } else {
      cart.items[itemIndex].quantity += input.quantity;
    }

    // @ts-ignore
    return this.cartRepository.updateOneById(cart._id, {
      items: cart.items,
    });
  }


  async removeItem(cartId: string, productId: string) {
    const cart = await this.cartRepository.findOneById(cartId); // Sửa lại

    if (!cart) {
      throw new NotFoundException('Cart not found');
    }

    
    const productObjectId = new Types.ObjectId(productId);

    
    const itemIndex = cart.items.findIndex(
      (item: { productId: Types.ObjectId }) =>
        item.productId.equals(productObjectId) 
    );

    if (itemIndex === -1) {
      throw new NotFoundException('Product not found in cart');
    }

    cart.items.splice(itemIndex, 1);

    await this.cartRepository.updateOneById(cart._id, { items: cart.items }); 
    return { message: 'Item removed successfully', cart };
}


  async getMyCart(userId: string) {
    const cart = await this.cartRepository.findOneBy(
      { userId },
      {
        populate: [
          {
            path: 'items.productId',
          },
          {
            path: 'items.skuId',
          },
        ],
      },
    );

    if (!cart) return this.cartRepository.create({ userId, items: [] });

    return cart;
  }
  
}