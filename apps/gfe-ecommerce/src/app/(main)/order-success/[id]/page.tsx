import OrderSuccessSection from '@/features/order-success/order-success-section';
import { cookies } from 'next/headers'
import { notFound } from 'next/navigation';
import React from 'react'

export default async function Page(props: {
  params: Promise<{ id: string }>
}) {
  const params = await props.params;
  const cookieStore = await cookies();
  const orderId = cookieStore.get(`order_${params.id}`)?.value;

  if (!orderId) {
    return <>Not found</>;
  }

  return (
    <OrderSuccessSection orderId={orderId} />
  )
}
