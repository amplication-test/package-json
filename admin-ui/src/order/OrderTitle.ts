import { Order as TOrder } from "../api/order/Order";

export const ORDER_TITLE_FIELD = "te";

export const OrderTitle = (record: TOrder): string => {
  return record.te || String(record.id);
};
