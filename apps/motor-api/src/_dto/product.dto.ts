// api/src/product/dto/product.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsInt, IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class ProductDto {
  @ApiProperty({
    description: 'Product Code.',
    example: '1000',
  })
  @IsNotEmpty()
  @IsInt()
  productCode: number;

  @ApiProperty({
    description: 'Product Location',
    example: 'West Malaysia',
  })
  @IsString()
  @IsString()
  @Transform(({ value }) => value.toLowerCase())
  location: string;

  @ApiProperty({
    description: 'Product Price',
    example: '300',
  })
  @IsNumber()
  price: number;
}
