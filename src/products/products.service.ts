import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist/common/typeorm.decorators';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {
  }

  findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  insertDummy(): Promise<any> {
    const product = new Product();
    product.name = `Product_${new Date().getTime()}`;
    product.description = 'Test product';
    return this.productRepository.insert(product);
  }

  findOne(id: string): Promise<Product> {
    return this.productRepository.findOne(id);
  }

  async remove(id: string): Promise<boolean> {
    await this.productRepository.delete(id);
    return true;
  }
}
