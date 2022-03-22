import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Neighborhood } from './neighborhood.entity';
import { Repository } from 'typeorm';
import { NeighborhoodDto } from './neighborhood.dto';

@Injectable()
export class NeighborhoodsService {
  constructor(
    @InjectRepository(Neighborhood) private repo: Repository<Neighborhood>
  ) {}


  async getNeighborhoods() {
    this.repo.find();
  }
  
  async neighborhoodQuery({ city }: NeighborhoodDto) {
    return this.repo
      .createQueryBuilder()
      .select('neighborhood')
      .where('cityCity = :city', { city } )
      .getRawMany();
  }
}
