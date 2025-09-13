import { ICollection } from "@/types";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

const CollectionCard = ({
  image_url,
  description,
  name,
  isPrimary,
  collection_id
}: Partial<ICollection> & {
  isPrimary?: boolean;
}
) => {
  return <Link href={`/products?collection=${collection_id}`} className='relative block'>
    <div
      className={clsx('rounded-lg overflow-hidden relative', {
        'h-[580px] w-full ': isPrimary,
        'w-full h-[337px] md:h-[276px] ': !isPrimary
      })}
    >
      <Image
        src={image_url ?? ''}
        alt={`${name} collection's banner`}
        // width={600}
        // height={580}
        fill
        className={clsx('rounded-lg object-cover hover:scale-110 transition-all', {
          // 'h-[580px] w-full ': isPrimary,
          // 'w-full h-[337px] md:h-[276px] ': !isPrimary
        })}
      />
    </div>
    <div className='absolute w-full bottom-0 left-0 right-0 p-4'>
      <h3 className='text-xs font-normal text-white'>{name}</h3>
      <p className='text-lg font-medium text-white'>{description}</p>
    </div>
  </Link>
}

export { CollectionCard }