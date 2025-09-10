import {
  CATEGORY_OPTIONS,
  COLLECTIONS_OPTIONS,
  COLORS_OPTIONS,
  RATING_OPTIONS,
} from "@/config";
import {
  AvailableColorType,
  AvailableSizeType,
  IInventoryItem,
  IProduct,
  IProductImage,
  IProductListingSearchParams,
} from "@/types";
import isArray from "lodash/isArray";

export const calculateAvailability = (
  product: IProduct | null,
  selectedColor: string | null,
  selectedSize: string | null
) => {
  const localSelectedColor = selectedColor ?? product?.colors?.[0] ?? null;
  const localSelectedSize =
    selectedSize ??
    product?.inventory?.find(
      (inv) => inv.color === localSelectedColor && inv.stock > 0
    )?.size ??
    null;

  const availableColors: AvailableColorType[] =
    product?.colors.map((c) => ({
      color: c,
      disabled:
        !!localSelectedSize &&
        !product?.inventory.find(
          (inv) => inv.color === c && inv.size === localSelectedSize
        )?.stock,
    })) ?? [];
  const availableSizes: AvailableSizeType[] =
    product?.sizes.map((s) => ({
      size: s,
      disabled:
        !!localSelectedColor &&
        !product?.inventory.find(
          (inv) => inv.size === s && inv.color === localSelectedColor
        )?.stock,
    })) ?? [];
  const inventory: IInventoryItem | null =
    product?.inventory.find(
      (inv) =>
        (localSelectedSize
          ? inv.size === localSelectedSize
          : inv.size === null) && inv.color === localSelectedColor
    ) ?? null;

  const quantity: number = (inventory?.stock as number) > 0 ? 1 : 0;

  const images: IProductImage[] =
    (localSelectedColor
      ? product?.images?.filter((img) => img.color === localSelectedColor)
      : product?.images) ?? [];

  const previewImage: IProductImage | null = images.length
    ? (images[0] as IProductImage)
    : (product?.images?.[0] ?? null);

  return {
    availableColors,
    availableSizes,
    inventory,
    selectedColor: localSelectedColor,
    selectedSize: localSelectedSize,
    images,
    previewImage,
    quantity,
  };
};

export const getListingQueryString = (
  searchParams?: IProductListingSearchParams
): string => {
  const filters = [
    COLORS_OPTIONS,
    COLLECTIONS_OPTIONS,
    CATEGORY_OPTIONS,
    RATING_OPTIONS,
  ];
  if (!searchParams) return "";
  const { page, sort, direction } = searchParams;
  let queryString = filters
    .map((filter) => {
      const values = searchParams?.[filter.key as keyof typeof searchParams];
      return Array.from(
        new Set(
          isArray(values)
            ? values.join(",").split(",").filter(Boolean)
            : values?.split(",").filter(Boolean)
        )
      )
        .map((item: string) => `${filter.key}=${item}`)
        .join("&");
    })
    .filter(Boolean)
    .join("&");

  // console.log("chưa join", queryString);
  //   ...Array.from(color).map(
  //     (color) => `${COLORS_OPTIONS.key}=${encodeURIComponent(color)}`
  //   ),
  //   ...Array.from(collection).map(
  //     (collection) =>
  //       `${COLLECTIONS_OPTIONS.key}=${encodeURIComponent(collection)}`
  //   ),
  //   ...Array.from(rating).map(
  //     (rating) => `${RATING_OPTIONS.key}=${encodeURIComponent(rating)}`
  //   ),
  //   ...Array.from(category).map(
  //     (category) => `${CATEGORY_OPTIONS.key}=${encodeURIComponent(category)}`
  //   ),
  // ].join("&");
  // }
  queryString = `${queryString ? `${queryString}&` : ""}sort=${
    sort ?? "created"
  }&direction=${direction ?? "desc"}&page=${page ?? 1}`;
  return queryString;
};
