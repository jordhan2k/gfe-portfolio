'use client'

import { useToast } from '../../hooks/use-toast';
import Toast from './toast'

function Toaster() {
  const { toasts } = useToast();
  return (
    <div className='fixed right-4 top-4 ml-5 flex flex-col gap-4 max-w-[340px] w-full'>
      {
        toasts.map((item) => <Toast key={`toast-${item.id}`} variant={item.variant} message={item.message} />)
      }
    </div>
  )
}

export { Toaster }
