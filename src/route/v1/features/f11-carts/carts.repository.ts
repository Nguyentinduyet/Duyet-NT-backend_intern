import BaseRepository from '@base-inherit/base.repository';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PaginateModel, Types } from 'mongoose';
import { Carts, CartsDocument } from './schemas/carts.schema';

@Injectable()
export default class CartsRepository extends BaseRepository<CartsDocument> {
  constructor(@InjectModel(Carts.name) private readonly cartModel: PaginateModel<CartsDocument>) {
    super(cartModel);
  }

  // 🛒 Thêm sản phẩm vào giỏ hàng
  async addToCart(userId: string, productId: string, skuId: string, quantity: number) {
    let cart = await this.cartModel.findOne({ userId });

    if (!cart) {
      cart = new this.cartModel({ userId, items: [] });
    }

    const existingItem = cart.items.find(
      (item) => item.productId.toString() === productId && item.skuId.toString() === skuId
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.items.push({ 
        productId: new Types.ObjectId(productId), 
        skuId: new Types.ObjectId(skuId), // Đảm bảo skuId đúng kiểu ObjectId
        quantity 
      });
    }

    return cart.save();
  }

  // 🛍 Lấy giỏ hàng của user
  async getCart(userId: string) {
    return this.cartModel.findOne({ userId }).populate('items.productId items.skuId');
  }
}
