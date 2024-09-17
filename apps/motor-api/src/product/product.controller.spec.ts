import { Test, TestingModule } from '@nestjs/testing';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { ProductDto } from '../_dto/product.dto';
describe('ProductController', () => {
  let productController: ProductController;
  let productService: ProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductController],
      providers: [
        {
          provide: ProductService,
          useValue: {
            findAll: jest.fn(),
            create: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
          },
        },
      ],
    }).compile();

    productController = module.get<ProductController>(ProductController);
    productService = module.get<ProductService>(ProductService);
  });

  it('should be defined', () => {
    expect(productController).toBeDefined();
  });

  describe('getProduct', () => {
    it('should call productService.findAll with the correct parameters', async () => {
      const productCode = 1;
      const location = 'West Malaysia';
      await productController.getProduct(productCode, location);
      expect(productService.findAll).toHaveBeenCalledWith(
        productCode,
        location,
      );
    });
  });

  describe('createProduct', () => {
    it('should call productService.create with the correct dto', async () => {
      const productDto: ProductDto = {
        productCode: 1,
        location: 'East Malaysia',
        price: 100,
      };
      await productController.createProduct(productDto);
      expect(productService.create).toHaveBeenCalledWith(productDto);
    });
  });

  describe('updateProduct', () => {
    it('should call productService.update with the correct parameters', async () => {
      const productCode = 1;
      const productDto: ProductDto = { location: 'West Malaysia', price: 150 };
      await productController.updateProduct(productCode, productDto);
      expect(productService.update).toHaveBeenCalledWith(
        productCode,
        productDto.location,
        productDto.price,
      );
    });
  });

  describe('deleteProduct', () => {
    it('should call productService.delete with the correct productCode', async () => {
      const productCode = 1;
      await productController.deleteProduct(productCode);
      expect(productService.delete).toHaveBeenCalledWith(productCode);
    });
  });
});
