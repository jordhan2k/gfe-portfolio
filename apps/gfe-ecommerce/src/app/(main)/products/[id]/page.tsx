import DynamicTopScroller from '@/components/common/dynamic-top-scroller';
import CollectionSection from '@/features/product-detail/components/collection-section';
import { ProductDetailContextProvider } from '@/features/product-detail/context';
import { ProductDetail } from '@/features/product-detail/product-detail';
import ProductSpecification from '@/features/product-detail/components/product-specification';
import { IProduct } from '@/types';
import { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{ id: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata({
  params
}: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const { id } = await params;
  const response = await fetch(`https://www.greatfrontend.com/api/projects/challenges/e-commerce/products/${id}`);
  const product: IProduct = await response.json();
  const previousImages = (await parent).openGraph?.images || [];
  const productImages = product?.images?.length ? product.images?.map((image) => image.image_url) : []
  return {
    title: product.name,
    description: product.description,
    openGraph: {
      images: [
        ...productImages,
        ...previousImages
      ]
    }
  }
}

export async function generateStaticParams() {
  const result = await fetch('https://www.greatfrontend.com/api/projects/challenges/e-commerce/products?per_page=100').then((res) => res.json())

  return result.data.map((product: IProduct) => ({
    id: product.product_id,
  }))
}

export default async function ProductDetailPage(props: Props) {
  const id = (await props.params).id;
  const response = await fetch(`https://www.greatfrontend.com/api/projects/challenges/e-commerce/products/${id}`);
  const product: IProduct = await response.json();

  if (!product) {
    return notFound();
  }
  return (
    <ProductDetailContextProvider initialProduct={product}>
      {/* <DynamicTopScroller /> */}
      <ProductDetail />
      <ProductSpecification />
      <CollectionSection />
      {/* <div className='px-4 py-12 xl:p-24 grid grid-cols-4 md:grid-cols-6 xl:grid-cols-12 gap-x-4 md:gap-x-8 gap-y-12'>
        <div className='col-span-4 md:col-span-6'>
          <ProductImages />
        </div>
        <div className='col-span-4 md:col-span-6'>
          <ProductMeta />
        </div>
      </div> */}
    </ProductDetailContextProvider>

  )
}
