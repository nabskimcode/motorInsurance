import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Query,
  Body,
  UseGuards,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDto } from '../_dto/product.dto';
// import { RolesGuard } from '../guard/roles.guard';
import { AdminGuard } from '../guard/admin.guard';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('product')
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('/health')
  @ApiOperation({ summary: 'Service Health check' })
  async getHealth() {
    return 'healthy';
  }

  @Get()
  async getProduct(
    @Query('productCode') productCode: number,
    @Query('location') location: string,
  ) {
    return this.productService.findAll(productCode, location);
  }

  @Post()
  @UseGuards(AdminGuard)
  async createProduct(@Body() productDto: ProductDto) {
    return this.productService.create(productDto);
  }

  @Put()
  @UseGuards(AdminGuard)
  async updateProduct(
    @Query('productCode') productCode: number,
    @Body() { location, price }: ProductDto,
  ) {
    return this.productService.update(productCode, location, price);
  }

  @Delete()
  @UseGuards(AdminGuard)
  async deleteProduct(@Query('productCode') productCode: number) {
    return this.productService.delete(productCode);
  }
}
