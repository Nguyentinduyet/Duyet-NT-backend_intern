import BaseService from '@base-inherit/base.service';
import CustomLoggerService from '@lazy-module/logger/logger.service';
import { Injectable } from '@nestjs/common';
import { CartsDocument } from './schemas/carts.schema';
import CartsRepository from './carts.repository';

@Injectable()
export default class CartsService extends BaseService<CartsDocument> {
  constructor(
    readonly logger: CustomLoggerService,
    readonly testRepository: CartsRepository,
  ) {
    super(logger, testRepository);
  }
  // 🛒 Thêm sản phẩm vào giỏ hàng
  async addToCart(userId: string, productId: string, sku: string, quantity: number) {
    return this.testRepository.addToCart(userId, productId, sku, quantity);
  }

  // 🛍 Lấy giỏ hàng của user
  async getCart(userId: string) {
    return this.testRepository.getCart(userId);
  }
}
