import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StockService } from '../core/services/stock.service';
import StockEntity from '../infrastructure/postgres/stock.entity';
import { StockRepository } from '../infrastructure/postgres/stock.repository';
import { StockGateway } from './stock.gateway';


@Module({
  providers: [StockService, StockGateway, StockRepository,],
  imports: [TypeOrmModule.forFeature([StockEntity])],
})
export class StockModule {}
