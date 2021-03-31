import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
class StockEntity {
  @PrimaryColumn()
  public id: string;
 
  @Column()
  public name: string;

  @Column()
  price: number;

  @Column()
  description: string;
}
 
export default StockEntity;