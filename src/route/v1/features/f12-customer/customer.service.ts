import BaseService from '@base-inherit/base.service';
import CustomLoggerService from '@lazy-module/logger/logger.service';
import { Injectable } from '@nestjs/common';
import { Customer, CustomerDocument } from './schemas/customer.schema';
import CustomerRepository from './customer.repository';
import CreateCustomerDto from './dto/create-customer.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export default class CustomerService {
  [x: string]: any;
  constructor(
    @InjectModel(Customer.name)
    private readonly customerModel: Model<CustomerDocument>,
  ) {}

  async create(dto: CreateCustomerDto): Promise<Customer> {
    const created = new this.customerModel(dto);
    return created.save();
  }
}
