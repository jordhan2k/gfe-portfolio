import { IProduct } from "@/types";
import capitalize from "lodash/capitalize";
import Image from "next/image";
import Link from "next/link";
import { ColorOption } from "./ui/color-option";

const ProductCard = ({
  product
}: {
  product: IProduct;
}) => {
  const { images, colors, name, inventory, product_id } = product;
  const { discount_percentage, sale_price, list_price, color, discount } = inventory[0]!;
  const hasDiscount = !!discount_percentage || discount
  return <Link
    href={`/products/${product_id}`} key={product_id}
    prefetch={false}
    scroll={true}
    tabIndex={0}
    className='group  focus:outline-none'>
    <div className='group-focus:rounded-lg group-focus:ring-4 group-focus:ring-indigo-800/20'>
      <Image
        src={images?.[0]?.image_url ?? ''}
        height={300}
        // quality={100}
        width={340}
        alt={`${name}'s image`}
        className='h-[300px] w-full object-cover rounded-lg bg-neutral-200'
      />
      <div className='py-4'>
        <div className='text-xs font-normal text-neutral-600'>{capitalize(product?.images?.[0]?.color)}</div>
        <h3 className='text-lg font-medium text-neutral-900 group-hover:text-indigo-700 group-focus:text-indigo-700'>{product.name}</h3>
        <div className='text-lg font-normal text-neutral-500 my-3 flex items-center gap-2'>
          ${hasDiscount ? sale_price : list_price}
          {hasDiscount ? <span className='text-xs font-normal text-neutral-600 line-through'>{list_price}</span> : null}
        </div>
        <div className='flex gap-2'>
          {
            colors.map((c) => (
              <ColorOption key={c} color={c} size="md" />
            ))
          }
        </div>
      </div>
    </div>
  </Link>
}

const ProductCardSkeleton = () => {
  return (
    <div className="group animate-pulse">
      <div className="h-[300px] w-full rounded-lg bg-neutral-200" />
      <div className="py-4">
        {/* color text */}
        <div className="h-4 w-20 rounded bg-neutral-200 mb-1" />
        {/* product name */}
        <div className="h-7 w-3/4 rounded bg-neutral-200" />
        {/* price */}
        <div className="h-6 w-16 rounded bg-neutral-200 my-3" />
        {/* color options */}
        <div className="flex gap-2">
          <div className="m-1 h-4 w-4 rounded-full bg-neutral-200" />
          <div className="m-1 h-4 w-4 rounded-full bg-neutral-200" />
          <div className="m-1 h-4 w-4 rounded-full bg-neutral-200" />
        </div>
      </div>
    </div>
  );
};



export { ProductCard, ProductCardSkeleton };
