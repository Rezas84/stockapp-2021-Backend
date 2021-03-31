export interface ChatClient {
  id: string;
  stockName: string;
  typing?: boolean;
  description: string;
  price: string;
}
