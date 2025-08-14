'use client'

// import { Button } from '@/components/ui/button'
import { useToast } from '@repo/ui/src/hooks/use-toast';
import { Button } from '@repo/ui/src/components/ui/button';
import React from 'react'

function ToastWrapper() {
  const { toast } = useToast();
  return (
    <div className='flex flex-row gap-6 flex-wrap'><Button
      onClick={() => toast({
        variant: 'success',
        message: 'Your content successfully added!',
      })}
      variant="secondary">Show success</Button>
      <Button
        onClick={() => toast({
          variant: 'error',
          message: 'Your content successfully deleted!',
        })}
        variant="secondary">Show error</Button>
      <Button
        onClick={() => toast({
          variant: 'warning',
          message: 'Your image is 5Mb, it may load longer!',
        })}
        variant="secondary">Show warning</Button>
      <Button
        onClick={() => toast({
          variant: 'info',
          message: 'Your content is publicly visible.',
        })}
        variant="secondary">Show info</Button>
    </div>
  )
}

export default ToastWrapper