'use client'

import { useToast } from '../../hooks/use-toast';
import Toast from './toast'

function Toaster() {
  const { toasts } = useToast();
  return (
    <div className='ui:fixed ui:left-0 ui:right-0 ui:top-0 ui:p-4 ui:flex ui:flex-col ui:items-end ui:gap-4 ui:w-full'>
      {toasts.map((item) => (
        <Toast
          key={`toast-${item.id}`}
          variant={item.variant}
          message={item.message}
        />
      ))}
    </div>
  )
}

export { Toaster }
