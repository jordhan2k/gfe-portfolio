export interface ICartProduct {
  product_id: string;
  name: string;
  description: string;
}

export interface ICartUnit {
  sku: string;
  list_price: number;
  sale_price: number;
  size: string | null;
  color: string;
  stock: number;
  image_url: string;
}

export interface ICartItem {
  product: ICartProduct;
  unit: ICartUnit;
  total_list_price: number;
  total_sale_price: number;
  quantity: number;
  created_at: string; // could also be Date if you parse it
}

export interface ICartSummary {
  subtotal: number;
  discount: number | null;
  discount_code: string | null;
  shipping: number;
  total: number;
}

export interface IGetCartData {
  cart_id: string;
  summary: ICartSummary;
  items: ICartItem[];
}
