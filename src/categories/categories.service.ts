import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/categories/category.entity';
import { User } from 'src/users/user.entity';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './create-category.dto';

@Injectable()
export class CategoriesService {
    constructor(
        @InjectRepository(Category) private repo: Repository<Category>,
        @InjectRepository(User) private userRepo: Repository<User>
        ){}

    getCategories(){
       return this.repo.find()
    }

    async postCategories(createCategoryDto: CreateCategoryDto){
         const category = this.repo.create(createCategoryDto);
        return this.repo.save(category);
    }
}
