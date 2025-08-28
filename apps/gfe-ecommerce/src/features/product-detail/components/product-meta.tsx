
import { AvailableColors } from './available-colors';
import { AvailableSizes } from './available-sizes';
import { CartQuantity } from './cart-quantity';
import InfoSection from './info-section';
import { ProductOverview } from './product-overview';


function ProductMeta() {
  return (
    <div className='flex flex-col gap-8'>
      <ProductOverview />
      <AvailableColors />
      <AvailableSizes />
      <CartQuantity />
      <InfoSection />
    </div>
  )
}

export { ProductMeta };
