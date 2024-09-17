import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '../entity/product.entity';
import { ProductDto } from '../_dto/product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async findAll(productCode?: number, location?: string): Promise<Product[]> {
    return this.productRepository.find({ where: { productCode, location } });
  }

  async create(productDto: ProductDto): Promise<Product> {
    const product = this.productRepository.create(productDto);
    return this.productRepository.save(product);
  }

  async update(productCode: number, location: string, price: number) {
    return this.productRepository.update({ productCode, location }, { price });
  }

  async delete(productCode: number): Promise<void> {
    await this.productRepository.delete({ productCode });
  }
}
