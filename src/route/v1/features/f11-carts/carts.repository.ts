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
  async addToCart(userId: string, productId: string, sku: string, quantity: number) {
    const cart = await this.cartModel.findOne({ userId });

    if (!cart) {
        return await this.cartModel.create({
            userId,
            items: [{ productId, sku, price: 100, quantity }]
        });
    }

    // 🔍 Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
    const itemExists = cart.items.some(item => 
        item.productId.toString  === productId.toString && item.sku === sku
    );

    if (!itemExists) {
        // 🔄 Nếu chưa có, thêm sản phẩm mới
        cart.items.push({ productId: new Types.ObjectId (productId), sku, price: 100, quantity });
        await cart.save();
    }

    return cart;
}


  // 📦 Lấy giỏ hàng của user
  async getCart(userId: string): Promise<CartsDocument | null> {
    console.log("🔎 Tìm giỏ hàng với userId:", userId)
    const userObjectId = new Types.ObjectId(userId);
    return this.cartModel.findOne({ userId: userObjectId });
  }

  // 🔄 Cập nhật số lượng sản phẩm trong giỏ hàng
  async updateQuantity(userId: string, productId: string, sku: string, quantity: number): Promise<CartsDocument | null> {
    console.log("🔄 Cập nhật số lượng sản phẩm:", { userId, productId, sku, quantity });

    const updatedCart = await this.cartModel.findOneAndUpdate(
      { userId: new Types.ObjectId(userId), 'items.productId': new Types.ObjectId(productId), 'items.sku': sku },
      { $set: { 'items.$.quantity': quantity } },
      { new: true },
    );

    console.log("📦 Giỏ hàng sau khi cập nhật:", updatedCart);
    return updatedCart;
}


  // ❌ Xóa sản phẩm khỏi giỏ hàng
  async removeItem(userId: string, productId: string, sku: string): Promise<CartsDocument | null> {
    const userObjectId = new Types.ObjectId(userId);
    const productObjectId = new Types.ObjectId(productId);

    const updatedCart = await this.cartModel.findOneAndUpdate(
      { userId: userObjectId },
      { $pull: { items: { productId: productObjectId, sku } } },
      { new: true },
    );
    return updatedCart;
  }
}
