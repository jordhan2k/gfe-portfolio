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

export interface IApplyDiscount {
  coupon_code: string;
  discount_amount: number | null;
  discount_percentage: number | null;
  error?: string;
}

export interface IAddress {
  line1: string;
  line2?: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  countryCode: string;
}

export interface IShippingDetail {
  address: IAddress;
  phone: string;
}

export interface IPaymentMethod {
  type: string;
  last_4: string;
  exp_month: number;
  exp_year: number;
}

export interface IReceiver {
  firstName: string;
  lastName: string;
  email: string;
}

export interface IGetOrder {
  order_id?: string;
  items: ICartItem[];
  summary: ICartSummary;
  shipping_details: IShippingDetail;
  payment_method: IPaymentMethod;
}
