'use client'
import { calculateAvailability } from "@/lib";
import { AvailableColorType, AvailableSizeType, IInventoryItem, IProduct, IProductImage } from "@/types";
import React, { createContext, useContext, useMemo, useReducer } from "react";

/**
 * REFERENCE: https://www.developerway.com/posts/how-to-write-performant-react-apps-with-context
 */

type ProductDetailContextProviderType = {
  children: React.ReactNode;
  initialProduct: IProduct | null;
}


type State = {
  product: IProduct | null;
  availableColors: AvailableColorType[];
  selectedColor: string | null;
  availableSizes: AvailableSizeType[];
  selectedSize: string | null;
  inventory: IInventoryItem | null;
  images: IProductImage[];
  previewImage: IProductImage | null;
  quantity: number;
}

const enum ActionTypeEnum {
  SELECT_COLOR = "selectColor",
  SELECT_SIZE = "selectSize",
  DECREASE_QUANTITY = "decreaseQuantity",
  INCREASE_QUANTITY = "increaseQuantity",
  SELECT_IMAGE = "selectImage"
}
type Actions =
  | { type: ActionTypeEnum.SELECT_COLOR; data: string }
  | { type: ActionTypeEnum.SELECT_SIZE; data: string }
  | { type: ActionTypeEnum.SELECT_IMAGE; data: IProductImage }
  | { type: ActionTypeEnum.INCREASE_QUANTITY, data: null }
  | { type: ActionTypeEnum.DECREASE_QUANTITY, data: null }
  ;

type ProductActions = {
  onSelectColor: (color: string) => void;
  onSelectSize: (size: string) => void;
  onSelectImage: (image: IProductImage) => void;
  onDecrease: () => void;
  onIncrease: () => void;
}
const ProductActionsContext = createContext<ProductActions>({} as ProductActions);

type ProductDetailContextType = {
  product: State['product'],
}
const ProductDetailContext = createContext<ProductDetailContextType>({} as ProductDetailContextType);

type ColorContextType = {
  availableColors: State['availableColors'];
  selectedColor: State['selectedColor'];
};
const ColorContext = createContext<ColorContextType>({} as ColorContextType);

type SizeContextType = {
  availableSizes: State['availableSizes'];
  selectedSize: State['selectedSize'];
};
const SizeContext = createContext<SizeContextType>({} as SizeContextType);

type ImageContextType = {
  images: State['images'];
  previewImage: State['previewImage'];
};
const ImageContext = createContext<ImageContextType>({} as ImageContextType);

type CartControlContextType = {
  inventory: State['inventory'];
  quantity: State['quantity'];
};
const CartControlContext = createContext<CartControlContextType>({} as CartControlContextType);



const reducer = (state: State, action: Actions): State => {
  let calcData;
  switch (action.type) {

    case ActionTypeEnum.SELECT_COLOR:
      calcData = calculateAvailability(state.product, action.data, state.selectedSize)
      return {
        ...state,
        ...calcData,
        selectedColor: action.data,
        previewImage: action.data !== state.selectedColor
          ? calcData.previewImage
          : state.previewImage,
        quantity: calcData.inventory?.sku !== state.inventory?.sku ? calcData.quantity : state.quantity
      };
    case ActionTypeEnum.SELECT_SIZE:
      calcData = calculateAvailability(state.product, state.selectedColor, action.data)
      return {
        ...state,
        ...calcData,
        selectedSize: action.data,
        quantity: calcData.inventory?.sku !== state.inventory?.sku ? calcData.quantity : state.quantity
      };
    case ActionTypeEnum.SELECT_IMAGE:
      return {
        ...state,
        previewImage: action.data
      };

    case ActionTypeEnum.DECREASE_QUANTITY:
      return {
        ...state,
        quantity: state.quantity - 1
      }
    case ActionTypeEnum.INCREASE_QUANTITY:
      return {
        ...state,
        quantity: state.quantity + 1
      }
    default:
      return state;
  }
}

const initialState: State = {
  product: null,
  availableColors: [],
  availableSizes: [],
  selectedColor: null,
  selectedSize: null,
  inventory: null,
  images: [],
  previewImage: null,
  quantity: 0
}

const ProductDetailContextProvider = ({
  children,
  initialProduct
}: ProductDetailContextProviderType) => {


  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    product: initialProduct,

  } as State,
    ({ product }): State => {
      const calcData = calculateAvailability(product, null, null);
      return {
        product: initialProduct,
        ...calcData
      };
    }
  );


  const actions = useMemo(() => {
    const onSelectColor = (color: string) => {
      dispatch({ type: ActionTypeEnum.SELECT_COLOR, data: color })
    }
    const onSelectSize = (size: string) => {
      dispatch({ type: ActionTypeEnum.SELECT_SIZE, data: size })
    }
    const onSelectImage = (image: IProductImage) => {
      dispatch({ type: ActionTypeEnum.SELECT_IMAGE, data: image })
    }
    const onIncrease = () => {
      dispatch({ type: ActionTypeEnum.INCREASE_QUANTITY, data: null })
    }
    const onDecrease = () => {
      dispatch({ type: ActionTypeEnum.DECREASE_QUANTITY, data: null })
    }
    return { onSelectColor, onSelectSize, onSelectImage, onIncrease, onDecrease };
  }, []);

  const productValue = useMemo(() => ({
    product: state.product,
    // inventory: state.inventory
  }), [
    state.product,
    // state.inventory,
  ]);

  const imageValue = useMemo(() => ({
    images: state.images,
    previewImage: state.previewImage
  }), [
    state.images,
    state.previewImage
  ]);

  const colorValue = useMemo(
    () => ({
      availableColors: state.availableColors,
      selectedColor: state.selectedColor,
    }),
    [state.availableColors, state.selectedColor]
  );

  const sizeValue = useMemo(
    () => ({
      availableSizes: state.availableSizes,
      selectedSize: state.selectedSize,
    }),
    [state.availableSizes, state.selectedSize]
  );

  const cartValue = useMemo(() => ({
    inventory: state.inventory,
    quantity: state.quantity,
  }), [state.inventory, state.quantity])
  return <ProductActionsContext.Provider value={actions}>
    <ProductDetailContext.Provider value={productValue} >
      <ColorContext.Provider value={colorValue}>
        <SizeContext.Provider value={sizeValue}>
          <ImageContext.Provider value={imageValue} >
            <CartControlContext.Provider value={cartValue}>
              {children}
            </CartControlContext.Provider>
          </ImageContext.Provider>
        </SizeContext.Provider>
      </ColorContext.Provider>
    </ProductDetailContext.Provider>
  </ProductActionsContext.Provider>
};

const useProductActions = () => useContext(ProductActionsContext);
const useProductDetail = () => useContext(ProductDetailContext);
const useColorContext = () => useContext(ColorContext);
const useSizeContext = () => useContext(SizeContext);
const useImageContext = () => useContext(ImageContext);
const useCartControlContext = () => useContext(CartControlContext);

export { ProductDetailContextProvider, useCartControlContext, useColorContext, useImageContext, useProductActions, useProductDetail, useSizeContext };

