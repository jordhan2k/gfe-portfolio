'use client'
import clsx from 'clsx';
import Image from 'next/image';
import { useImageContext, useProductActions, useProductDetail } from '../context';


function ProductImages() {
  const {
    images,
    previewImage
  } = useImageContext();
  const {
    onSelectImage
  } = useProductActions();

  const { product } = useProductDetail();

  return (
    <div className='flex flex-col gap-6'>
      <Image
        // placeholder='blur'
        // blurDataURL={previewImage?.image_url ?? ''}
        src={previewImage?.image_url ?? ''}
        alt={`Image of ${product?.name}`}
        width={1000}
        height={1600}
        className='h-[400px] md:h-[800px] w-full object-cover rounded-lg bg-neutral-50'
      />
      <div className='overflow-scroll pb-4'>
        <ul className='flex gap-4 w-max'>
          {
            images?.map(({ color, image_url }) => (
              <li key={`${image_url}`}
                className={clsx('cursor-pointer focus:outline-none focus:ring-4 focus:ring-indigo-800/20 rounded-lg ', {

                })}
                onClick={() => onSelectImage({ color, image_url })}
              >
                <Image
                  src={image_url}
                  alt={`${color}-${image_url}`}
                  width={160}
                  height={190}
                  className={clsx('w-[80px] h-[120px] md:w-[188px] md:h-[190px] xl:w-[160px] xl:h-[190px] object-cover rounded-lg overflow-hidden ', {
                    ' border-3 border-indigo-600 box-content': previewImage?.image_url === image_url
                  })}
                />
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

const ProductImageSkeleton = () => {
  return <div className='flex flex-col gap-6'>
    <div
      className='h-[400px] md:h-[800px] w-full object-cover rounded-lg bg-neutral-200 animate-pulse'
    />
    <div className='overflow-scroll pb-4'>
      <ul className='flex gap-4 w-max'>
        {
          Array.from({ length: 3 })?.map((_, index) => (
            <li key={`product-item-${index}`}  >
              <div
                className={clsx('bg-neutral-200 animate-pulse w-[80px] h-[120px] md:w-[188px] md:h-[190px] xl:w-[160px] xl:h-[190px] object-cover rounded-lg overflow-hidden ')}
              />
            </li>
          ))
        }
      </ul>
    </div>

  </div>
}

export { ProductImages, ProductImageSkeleton };

