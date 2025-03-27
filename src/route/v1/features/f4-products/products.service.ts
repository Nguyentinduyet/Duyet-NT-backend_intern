import BaseService from '@base-inherit/base.service';
import CustomLoggerService from '@lazy-module/logger/logger.service';
import { BadRequestException, Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import ProductsRepository from './products.repository';
import { ProductsDocument } from './schemas/products.schema';

@Injectable()
export default class ProductsService extends BaseService<ProductsDocument> {
    constructor(
        readonly logger: CustomLoggerService,
        readonly testRepository: ProductsRepository, // Repository đúng
    ) {
      super(logger, testRepository); 
    }

    // Lấy chi tiết sản phẩm
    async getDetail(id: string): Promise<ProductsDocument> {
      const product = await this.testRepository.findOneBy({_id: id }); // Sử dụng findOneBy thay vì findById
      if (!product) throw new NotFoundException(`Sản phẩm với ID ${id} không tồn tại`);
      return product;
  }
  
  

  async buyProduct(id: string) {
    const product = await this.testRepository.findById(id);
    if (!product) {
        throw new NotFoundException('Sản phẩm không tồn tại');
    }
    console.log('Stock hiện tại:', product.stock);

    if (typeof product.stock !== 'number' || isNaN(product.stock) || product.stock === null) {
        throw new BadRequestException('Dữ liệu stock không hợp lệ');
    }

    if (product.stock <= 2) {
        throw new BadRequestException('Sản phẩm đã hết hàng');
    }

    const newStock = product.stock - 1;

    // Sử dụng phương thức đúng với Repository
    const updatedProduct = await this.testRepository.updateOneById(id, { stock: newStock });

    if (!updatedProduct) {
        throw new InternalServerErrorException('Lỗi cập nhật sản phẩm');
    }

    return updatedProduct;
}
async updateStock(id: string, newStock: number) {
  const product = await this.testRepository.findById(id);
  if (!product) {
      throw new NotFoundException('Sản phẩm không tồn tại');
  }
  
  if (typeof newStock !== 'number' || newStock < 0) {
      throw new BadRequestException('Giá trị stock không hợp lệ');
  }

  return this.testRepository.updateOneById(id, { stock: newStock });
}

  
}
