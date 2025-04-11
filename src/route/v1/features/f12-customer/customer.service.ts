import BaseService from '@base-inherit/base.service';
import CustomLoggerService from '@lazy-module/logger/logger.service';
import { Injectable, BadRequestException } from '@nestjs/common';
import { Customer, CustomerDocument } from './schemas/customer.schema';
import CustomerRepository from './customer.repository';
import CreateCustomerDto from './dto/create-customer.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';

@Injectable()
export default class CustomerService {
  [x: string]: any;

  constructor(
    @InjectModel(Customer.name)
    private readonly customerModel: Model<CustomerDocument>,

    private readonly customerRepository: CustomerRepository,
  ) {}

  async create(dto: CreateCustomerDto): Promise<Customer> {
    const created = new this.customerModel(dto);
    return created.save();
  }

  async findManyBy(condition: any): Promise<Customer[]> {
    if (condition._id && !Types.ObjectId.isValid(condition._id)) {
      throw new BadRequestException('ID không hợp lệ');
    }

    return this.customerRepository.find(condition);
  }
}
