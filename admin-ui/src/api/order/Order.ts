import { Customer } from "../customer/Customer";
import { Product } from "../product/Product";

export type Order = {
  createdAt: Date;
  customer?: Customer | null;
  discount: number | null;
  id: string;
  product?: Product | null;
  quantity: number | null;
  te: string | null;
  test: string | null;
  totalPrice: number | null;
  updatedAt: Date;
};
