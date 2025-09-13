'use client'

import { RiCloseLine } from '@remixicon/react';
import { Button } from '@repo/ui/src/components/ui/button';
import { Modal } from '@repo/ui/src/components/ui/modal';
import { useQueryClient } from '@tanstack/react-query';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

function ModalWrapper({
  children
}: {
  children: React.ReactNode
}) {
  const router = useRouter();
  const { id } = useParams();
  const queryClient = useQueryClient();

  const handleCloseModal = () => {
    router.back()
  }
  useEffect(() => {
    return () => {
      queryClient.removeQueries({ queryKey: ['product-reviews', id] })
      queryClient.removeQueries({ queryKey: ["product-reviews", "selected-rating", id] })
    }
  }, [])
  return (
    <Modal
      visible={true} onOpenChange={handleCloseModal}
      className='min-w-[343px] md:min-w-[522px] lg:min-w-[1008px] p-0'
    >
      <header className='p-6 flex justify-end'>
        <Button onClick={handleCloseModal} size='2xl' variant='link-gray'><RiCloseLine /> </Button>
      </header>
      {children}
    </Modal >
  )
}

export { ModalWrapper };
