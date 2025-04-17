import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Shopvoucher, ShopvoucherDocument } from './schemas/shop-voucher.schema';
import CreateShopvoucherDto from './dto/create-shop-voucher.dto';
import UpdateShopvoucherDto from './dto/update-shop-voucher.dto';
import ShopvoucherRepository from './shop-voucher.repository';
import { Type } from 'aws-sdk/clients/cloudformation';

@Injectable()
export default class ShopvoucherService {
  [x: string]: any;
  constructor(
    @InjectModel('Shopvoucher')
    private readonly shopvoucherModel: Model<ShopvoucherDocument>,

    private readonly shopvoucherRepository: ShopvoucherRepository,
  ) {}

  async create(dto: CreateShopvoucherDto): Promise<Shopvoucher> {
    const created = new this.shopvoucherModel(dto);
    return created.save();
  }

  async findManyBy(condition: any): Promise<Shopvoucher[]> {
    if (condition._id && !Types.ObjectId.isValid(condition._id)) {
      throw new BadRequestException('ID không hợp lệ');
    }

    return this.shopvoucherRepository.find(condition);
  }

  async updateOneById(
    id: Types.ObjectId,
    body: UpdateShopvoucherDto,
  ): Promise<Shopvoucher> {
    const updated = await this.shopvoucherModel.findByIdAndUpdate(id, body, {
      new: true,
    });

    if (!updated) {
      throw new NotFoundException('Shopvoucher not found');
    }

    return updated;
  }

  async created(dto: CreateShopvoucherDto) {
    return this.voucherModel.create(dto);
  }

  async findAll() {
    return this.voucherModel.find().exec();
  }

  async findOne(id: string) {
    return this.voucherModel.findById(id).exec();
  }

  async deleteOne(id: string) {
    return this.voucherModel.findByIdAndDelete(id).exec();
  }

  async update(id: string, dto: Partial<CreateShopvoucherDto>) {
    return this.voucherModel.findByIdAndUpdate(id, dto, { new: true }).exec();
  }
  async deleteOneHardById(id: string): Promise<boolean> {
    const result = await this.shopvoucherModel.findByIdAndDelete(id);
    return result ? true : false;
  }
  
  
}
