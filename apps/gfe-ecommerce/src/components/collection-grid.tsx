import { ICollection } from '@/types';
import { CollectionCard } from './collection-card';

function CollectionGrid({
  collections
}: {
  collections: ICollection[];
}) {
  return (
    <div className='grid grid-cols-4 md:grid-cols-6 xl:grid-cols-12 gap-4 md:gap-8 gap-y-8'>
      <div className='col-span-4 md:col-span-3 xl:col-span-6'>
        <CollectionCard
          collection_id={collections?.[0]?.collection_id}
          image_url={collections?.[0]?.image_url}
          name={collections?.[0]?.name}
          description={collections?.[0]?.description}
          isPrimary
        />
      </div>
      <div className='h-auto flex flex-col gap-8 md:gap-0 md:justify-between col-span-4 md:col-span-3 xl:col-span-6'>
        <CollectionCard
          collection_id={collections?.[1]?.collection_id}
          image_url={collections?.[1]?.image_url}
          name={collections?.[1]?.name}
          description={collections?.[1]?.description}
        />
        <CollectionCard
          collection_id={collections?.[2]?.collection_id}
          image_url={collections?.[2]?.image_url}
          name={collections?.[2]?.name}
          description={collections?.[2]?.description}
        />
      </div>
    </div>
  )
}




export { CollectionGrid };
