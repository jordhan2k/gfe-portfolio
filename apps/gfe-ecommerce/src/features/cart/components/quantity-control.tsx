import { RiAddFill, RiSubtractFill } from '@remixicon/react';
import { Button } from '@repo/ui/src/components/ui/button'
import React from 'react'

type QuantityControlProps = {
  disabledDecrease?: boolean;
  disabledIncrease?: boolean;
  quantity: number;
  onDecrease: () => void;
  onIncrease: () => void;
}

function QuantityControl({
  onDecrease,
  onIncrease,
  quantity,
  disabledDecrease,
  disabledIncrease
}: QuantityControlProps) {
  return (
    <div className='w-[125px] bg-neutral-50 flex items-center justify-between px-1.5 py-1.5 rounded-md border border-neutral-200 '>
      <Button
        aria-label='Decrease quantity'
        disabled={disabledDecrease}
        onClick={onDecrease}
        variant={'link-gray'}><RiSubtractFill /></Button>
      <span>{quantity}</span>
      <Button aria-label='Increase quantity'
        disabled={disabledIncrease}
        onClick={onIncrease}
        variant={'link-gray'}><RiAddFill /> </Button>
    </div>
  )
}

export { QuantityControl }