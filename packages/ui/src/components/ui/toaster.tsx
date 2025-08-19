'use client'

import { useToast } from '../../hooks/use-toast';
import Toast from './toast'

function Toaster() {
  const { toasts } = useToast();
  return (
    <div className='fixed left-0 right-0 top-0 p-4 flex flex-col items-end gap-4 w-full'>
      {
        toasts.map((item) => <Toast key={`toast-${item.id}`} variant={item.variant} message={item.message} />)
      }
    </div>
  )
}

export { Toaster }
