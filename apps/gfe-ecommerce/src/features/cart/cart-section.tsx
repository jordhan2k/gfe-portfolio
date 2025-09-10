import React, { Fragment } from 'react'
import { EmptyCart } from './components/empty-cart';
import { CartItem } from './components/cart-item';
import OrderSummary from './components/order-summary';
import { RiLoader5Line } from '@remixicon/react';
import { ICartItem, IGetCartData } from '@/types';
import { DashedSeparator } from '@/components/ui/separator';

// const sample_data = { "cart_id": "4126347157", "items": [{ "product": { "product_id": "stepsoft-socks", "name": "StepSoft Socks", "description": "Step into luxury with our StepSoft Socks, designed to pamper your feet with every step. Their cloud-like cushioning is like a spa for your soles." }, "unit": { "sku": "ss-orange-xs", "list_price": 25, "sale_price": 22.5, "size": "xs", "color": "orange", "stock": 10, "image_url": "https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/stepsoft-socks/stepsoft-socks-1.jpg" }, "total_list_price": 25, "total_sale_price": 22.5, "quantity": 1, "created_at": "2024-01-31" }, { "product": { "product_id": "elemental-sneakers", "name": "Elemental Sneakers", "description": "Ground your steps in style with our Elemental Sneakers. Designed with the elements in mind, they bring a natural balance to your stride and your ensemble." }, "unit": { "sku": "es-beige-6", "list_price": 100, "sale_price": 80, "size": "6", "color": "beige", "stock": 440, "image_url": "https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/elemental-sneakers/elemental-sneakers-1.jpg" }, "quantity": 1, "total_list_price": 100, "total_sale_price": 80, "created_at": "2024-03-25" }, { "product": { "product_id": "azure-attitude-shades", "name": "Azure Attitude Shades", "description": "Step out in style with our Azure Attitude Shades, featuring a bold blue tint and modern design. These sunglasses are not just an accessory but a statement of confidence." }, "unit": { "sku": "aas-blue", "list_price": 45, "sale_price": 45, "size": null, "color": "blue", "stock": 435, "image_url": "https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/azure-attitude-shades/azure-attitude-shades-1.jpg" }, "quantity": 1, "total_list_price": 45, "total_sale_price": 45, "created_at": "2024-03-21" }, { "product": { "product_id": "urban-drift-bucket-hat", "name": "Urban Drift Bucket Hat", "description": "Navigate the urban jungle with our Urban Drift Bucket Hat. It's not only trendy but also practical, offering shade from the hustle and bustle." }, "unit": { "sku": "udbh-white", "list_price": 15, "sale_price": 15, "size": null, "color": "white", "stock": 435, "image_url": "https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/urban-drift-bucket-hat/urban-drift-bucket-hat-5.jpg" }, "quantity": 1, "total_list_price": 15, "total_sale_price": 15, "created_at": "2024-04-04" }], "summary": { "subtotal": 162.5, "discount": 0, "discount_code": null, "shipping": 0, "total": 162.5 } }

async function CartSection() {
  const res: IGetCartData = await fetch(`https://www.greatfrontend.com/api/projects/challenges/e-commerce/cart-sample`).then((res) => res.json());

  const data: ICartItem[] = res.items;
  // const isFetching = false;

  return (
    <section className='px-3 py-12 md:px-4 md:py-16 xl:p-24 flex flex-col gap-16'>
      <h1 className='text-3xl font-semibold text-neutral-900 md:text-5xl'>Shopping Cart</h1>

      {/* {isFetching ? <div className='w-full py-20'>
        <RiLoader5Line className='size-20 animate-spin mx-auto text-indigo-400' />
      </div> : null} */}

      {!data.length ? <EmptyCart /> : null}

      {data.length
        ? <div className='grid grid-cols-4 md:grid-cols-6 xl:grid-cols-12 gap-4 md:gap-8 gap-y-8'>
          <div className='col-span-4 md:col-span-6 xl:col-span-8 flex flex-col gap-8'>
            {
              data.map((item, index) => (
                <Fragment key={item.product.product_id}>
                  <CartItem
                    {...item.product}
                    {...item.unit}
                    total_list_price={item.total_list_price}
                    total_sale_price={item.total_sale_price}
                    quantity={item.quantity}
                  />
                  {index !== data.length - 1 ? <DashedSeparator /> : null}
                </Fragment>
              ))
            }
          </div>
          <div className='col-span-4 md:col-span-6 xl:col-span-4'>
            <OrderSummary />
          </div>
        </div>
        : null}
    </section>
  )
}



export default CartSection