'use client'


import { Accordion } from '@repo/ui/src/components/ui/accordion';
import { useProductDetail } from '../context';

function InfoSection() {
  const {
    product
  } = useProductDetail();
  const infoList = product?.info;
  const name = product?.name;
  // const render = useRef(0);
  // console.log('info', render.current++)
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
            {index !== infoList.length - 1 ? <hr className='text-neutral-200 my-6' /> : null}
          </li>
        ))
      }
    </ul>
  )
}

export default InfoSection