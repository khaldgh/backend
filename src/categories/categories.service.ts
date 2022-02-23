import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/categories/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriesService {
    constructor(@InjectRepository(Category) private repo: Repository<Category>){}

    getCategories(){
       return this.repo.find()
    }
}
