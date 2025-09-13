import { RiCloseFill } from '@remixicon/react';
import clsx from 'clsx';
import { Button } from './button';


interface ModalDialogProps {
  visible: boolean;
  onOpenChange: (state: boolean) => void;
  title: string;
  description?: string;
  variant?: 'primary' | 'danger';
  cancelText?: string;
  confirmText: string;
  onCancel?: () => void;
  onConfirm: () => void;
}

function ModalDialog({
  visible, onOpenChange, title, description, confirmText, cancelText, variant = 'primary', onCancel, onConfirm
}: ModalDialogProps) {

  const handleClose = () => {
    onOpenChange(false)
  }
  return (
    <div className={clsx('ui:z-1002 ui:fixed ui:left-0 ui:top-0 ui:right-0 ui:w-dvw ui:h-dvh ui:flex ui:justify-center ui:items-center',
      {
        'ui:pointer-events-none ui:opacity-0': !visible,
      }
    )}>
      <div onClick={handleClose} className='ui:absolute ui:w-full ui:h-full ui:bg-black/70 ui:backdrop-blur-sm ui:z-1000' />
      <dialog open={visible} className='ui:max-w-[343px] ui:w-full ui:mx-auto ui:p-6 ui:rounded-lg ui:bg-white ui:z-1001'>
        <header className='ui:flex ui:gap-2 ui:items-start ui:justify-between'>
          <h2 className='ui:text-lg ui:font-semibold ui:text-neutral-900'>{title}</h2>
          <Button onClick={handleClose} variant={'link-gray'} size={'2xl'}><RiCloseFill /></Button>
        </header>
        <div className='ui:mt-2 ui:mb-6 ui:text-sm ui:font-normal ui:text-neutral-600'>
          {description}
        </div>
        <footer className='ui:w-full ui:flex ui:gap-3'>
          {cancelText ? <Button onClick={() => onCancel?.()} variant={'secondary'} size="lg" className='ui:flex-1'>{cancelText}</Button> : null}
          <Button onClick={onConfirm} variant={variant === 'danger' ? 'destructive' : 'primary'} size="lg" className='ui:flex-1'>{confirmText}</Button>
        </footer>
      </dialog>
    </div>

  )
}

export { ModalDialog };
