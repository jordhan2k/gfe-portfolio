'use client';
import { cn } from '#dep/lib/utils';
import clsx from 'clsx';
import { ComponentProps, useEffect } from 'react';


type ModalDialogProps = ComponentProps<'dialog'> & {
  visible: boolean;
  onOpenChange?: (state: boolean) => void;

}

function Modal({
  visible, onOpenChange,
  className,
  ...props
}: ModalDialogProps) {

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [visible]);



  const handleClose = () => {
    onOpenChange?.(false)
  }
  return (
    <div className={clsx('ui:fixed ui:w-dvw ui:h-dvh ui:flex ui:justify-center ui:items-center ui:top-0 ui:p-4',
      {
        'ui:pointer-events-none ui:opacity-0': !visible,
      }
    )}>
      <div onClick={handleClose} className='ui:absolute ui:w-full ui:h-full ui:bg-black/70 ui:backdrop-blur-sm ui:z-1000' />
      <dialog
        open={visible}
        className={cn('ui:max-w-[343px] ui:w-full ui:mx-auto ui:p-6 ui:rounded-lg ui:bg-white ui:z-1001', className)}
        {...props}
      >
        {props.children}
      </dialog>
    </div>

  )
}

export { Modal };
