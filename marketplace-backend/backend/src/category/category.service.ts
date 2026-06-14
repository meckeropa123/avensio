import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { slugify } from '../utils/slug.helper.js';

@Injectable()
export class CategoryService {
  constructor(private readonly prisma: PrismaService) {}

  create(createCategoryDto: CreateCategoryDto) {
    return this.prisma.category.create({
      data: {
        ...createCategoryDto,
        slug: slugify(createCategoryDto.name),
      },
    });
  }

  findAll() {
    return this.prisma.category.findMany();
  }
}
