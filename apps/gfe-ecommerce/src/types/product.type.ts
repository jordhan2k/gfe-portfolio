import { IPagination } from "./pagination.type";

export type AvailableColorType = {
  color: string;
  disabled?: boolean;
};
export type AvailableSizeType = {
  size: string;
  disabled?: boolean;
};

// Interfaces
export interface ICategory {
  category_id: string;
  name: string;
  created_at: string;
}

export interface ICollection {
  collection_id: string;
  name: string;
  description: string;
  image_url: string;
  created_at: string;
}

export interface IProductImage {
  color: string;
  image_url: string;
}

export interface IProductInfo {
  title: string;
  description: string[];
}

export interface IInventoryItem {
  sku: string;
  color: string;
  size: string | null;
  list_price: number;
  discount: number | null;
  discount_percentage: number | null;
  sale_price: number;
  sold: number;
  stock: number;
}

export interface IPriceRange {
  highest: number;
  lowest: number;
}

export interface IProduct {
  product_id: string;
  name: string;
  description: string;
  category: ICategory;
  collection: ICollection;
  created_at: string;
  colors: string[];
  images: IProductImage[];
  info: IProductInfo[];
  inventory: IInventoryItem[];
  priceRange: IPriceRange;
  rating: number;
  reviews: number;
  sizes: string[];
  sold: number;
}

export interface IGetProductListData {
  data: IProduct[];
  pagination: IPagination;
}
