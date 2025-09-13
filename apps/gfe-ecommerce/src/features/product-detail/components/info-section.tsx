'use client'


import { Accordion } from '@repo/ui/src/components/ui/accordion';
import { useProductDetail } from '../context';
import { Separator } from '@/components/ui/separator';

function InfoSection() {
  const {
    product
  } = useProductDetail();
  const infoList = product?.info;
  const name = product?.name;

  if (!infoList?.length) return null;
  return (
    <ul>
      {
        infoList?.map(({ title, description }, index) => (
          <li key={title}>
            <Accordion
              title={title}
              content={<ul>
                {
                  description.map((item) => (
                    <li key={`${name}-${title}-${item}`} className='list-disc ml-6'>
                      {item}
                    </li>
                  ))
                }
              </ul>}
            />
            {index !== infoList.length - 1 ? <Separator className='my-6' /> : null}
          </li>
        ))
      }
    </ul>
  )
}

export default InfoSection