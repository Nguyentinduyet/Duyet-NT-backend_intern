import BaseRepository from '@base-inherit/base.repository';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PaginateModel, Types } from 'mongoose';
import { Carts, CartsDocument } from './schemas/carts.schema';

@Injectable() // ✅ Thêm Injectable để NestJS có thể inject repository này
export default class CartsRepository extends BaseRepository<CartsDocument> {
  constructor(@InjectModel(Carts.name) private readonly cartModel: PaginateModel<CartsDocument>) {
    super(cartModel);
  }


  

  // 📦 Lấy giỏ hàng của user
  async getCart(userId: string): Promise<CartsDocument | null> {
    console.log("🔎 Tìm giỏ hàng với userId:", userId);
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
  

  async removeFromCart(userId: string, productId: string, sku: string): Promise<CartsDocument | null> {
    if (!Types.ObjectId.isValid(userId) || !Types.ObjectId.isValid(productId)) {
        throw new Error("Invalid userId or productId");
    }

    console.log("🗑️ Xóa sản phẩm khỏi giỏ hàng:", { userId, productId, sku });

    const userObjectId = new Types.ObjectId(userId);
    const productObjectId = new Types.ObjectId(productId);

    const updatedCart = await this.cartModel.findOneAndUpdate(
      { userId: userObjectId },
      { $pull: { items: { productId: productObjectId, ...(sku && { sku }) } } }, // Chỉ thêm `sku` nếu có
      { new: true },
    );

    if (!updatedCart) {
        throw new Error("Cart not found or product does not exist in cart");
    }

    console.log(" Giỏ hàng sau khi xóa sản phẩm:", updatedCart);
    return updatedCart;
}

}
