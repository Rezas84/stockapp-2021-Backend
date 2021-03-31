import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Stock } from "src/stock/core/models/stock.model";
import { Repository } from "typeorm";
import StockEntity from "./stock.entity";
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class StockRepository {
    constructor(
        @InjectRepository(StockEntity)
        private repository: Repository<StockEntity>
      ) {}

  async addStock(stock: Stock): Promise<Stock> {
    let stockDb = this.repository.create();
        stockDb.id = uuidv4();
        stockDb.name = stock.name;
        stockDb.price = stock.price;
        stockDb.description = stock.description

        stockDb = await this.repository.save(stockDb);
        const stockToReturn: Stock = JSON.parse(JSON.stringify(stockDb));
    return stockToReturn;
  }

  async getAllStocks(): Promise<Stock[]> {
    const stocks: Stock[] = await this.repository.find();
    return stocks;
  }

  async updateStock(stock: Stock): Promise<Stock> {
    const updatedStock = await this.repository.save(stock)
    const stockToReturn: Stock = JSON.parse(JSON.stringify(updatedStock));
    return stockToReturn;
  }

  async deleteStock(id: string): Promise<Stock>{
    const toReturn = await this.repository.findOne({id});
    await this.repository.delete({id});
    return toReturn;
  }

  async ChangePrice(id: string, newPrice: number): Promise<Stock> {
    const updatedStock = await this.repository.save({id: id, price: newPrice})
    const stockToReturn: Stock = JSON.parse(JSON.stringify(updatedStock));
    return stockToReturn;
  }
}