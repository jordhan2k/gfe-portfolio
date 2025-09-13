import CollectionSection from '@/features/product-detail/components/collection-section';
import ProductSpecification from '@/features/product-detail/components/product-specification';
import { ProductDetailContextProvider } from '@/features/product-detail/context';
import { ProductDetail } from '@/features/product-detail/product-detail';
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
      <ProductDetail />
      <ProductSpecification />
      <CollectionSection />
    </ProductDetailContextProvider>

  )
}
