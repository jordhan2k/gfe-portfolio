import {
  AvailableColorType,
  AvailableSizeType,
  IInventoryItem,
  IProduct,
  IProductImage,
} from "@/types";

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
