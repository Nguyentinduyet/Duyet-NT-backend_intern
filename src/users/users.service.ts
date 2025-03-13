import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [];

  async findAll(): Promise<User[]> {
    return this.users;
  }

  async findOne(id: number): Promise<User | null> {
    const user = this.users.find(user => user.id === id);
    return user || null; // Trả về null nếu không tìm thấy
  }

  async create(user: User): Promise<User> {
    this.users.push(user);
    return user;
  }

  async update(id: number, userData: Partial<User>): Promise<User | null> {
    const index = this.users.findIndex(u => u.id === id);
    if (index === -1) {
      return null; // Không tìm thấy user để cập nhật
    }
    this.users[index] = { ...this.users[index], ...userData }; // Merge dữ liệu cũ với mới
    return this.users[index];
  }

  async delete(id: number): Promise<void> {
    const index = this.users.findIndex(user => user.id === id);
    if (index === -1) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    this.users.splice(index, 1); // Xóa user khỏi mảng
  }
}
