import {
  CATEGORY_OPTIONS,
  COLLECTIONS_OPTIONS,
  COLORS_OPTIONS,
  RATING_OPTIONS,
} from "@/config";
import { IGetProductListData } from "@/types";
import { useQuery } from "@tanstack/react-query";

type GetProductListingParams = {
  category: string[];
  collection: string[];
  color: string[];
  rating: number[];

  direction: string | null;
  sort: string | null;
  page: number | null;
};

const getProductListing = async (params: GetProductListingParams) => {
  let queryString = "";
  const {
    category,
    collection,
    color,
    direction = "desc",
    rating,
    sort = "created",
    page = 1,
  } = params;
  if (
    color.length > 0 ||
    collection.length > 0 ||
    rating.length > 0 ||
    category.length > 0
  ) {
    queryString = [
      ...Array.from(color).map(
        (color) => `${COLORS_OPTIONS.key}=${encodeURIComponent(color)}`
      ),
      ...Array.from(collection).map(
        (collection) =>
          `${COLLECTIONS_OPTIONS.key}=${encodeURIComponent(collection)}`
      ),
      ...Array.from(rating).map(
        (rating) => `${RATING_OPTIONS.key}=${encodeURIComponent(rating)}`
      ),
      ...Array.from(category).map(
        (category) => `${CATEGORY_OPTIONS.key}=${encodeURIComponent(category)}`
      ),
    ].join("&");
  }
  queryString = `${queryString ? `${queryString}&` : ""}sort=${
    sort ?? "created"
  }&direction=${direction ?? "desc"}&page=${page ?? 1}`;

  const data = await fetch(
    `https://www.greatfrontend.com/api/projects/challenges/e-commerce/products${
      queryString ? `?${queryString}` : ""
    }`
  );
  const result: IGetProductListData = await data.json();

  if (!data.ok) {
    throw new Error("Cannot fetch product list");
  }
  return result;
};

const useProductListing = (params: GetProductListingParams) => {
  const { category, collection, color, direction, rating, sort, page } = params;
  return useQuery({
    queryKey: [
      "listing",
      category.toString(),
      collection.toString(),
      color.toString(),
      rating.toString(),
      direction,
      sort,
      page,
    ],
    queryFn: () => getProductListing(params),
  });
};

export { useProductListing };
