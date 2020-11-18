import { Controller, Delete, Get, Param } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './entities/product.entity';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {
  }

  @Get('/dummy')
  insertDummy(): Promise<Product[]> {
    return this.productsService.insertDummy();
  }

  @Get()
  findAll(): Promise<Product[]> {
    return this.productsService.findAll();
  }

  @Get('/:id')
  findById(@Param() params, @Param('id') id): Promise<Product> {
    console.log({ params, id });
    return this.productsService.findOne(id);
  }

  @Delete('/:id')
  delete(@Param() params, @Param('id') id): Promise<boolean> {
    console.log({ params, id });
    return this.productsService.remove(id);
  }
}
