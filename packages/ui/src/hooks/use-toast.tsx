import { useEffect, useState } from 'react';


let count = 0;

type ToastType = {
  id?: string;
  variant: 'success' | 'error' | 'warning' | 'info',
  message: string;
}

interface State {
  toasts: ToastType[];
}

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}

const listeners: Array<(state: State) => void> = [];

let memoryState: { toasts: ToastType[] } = { toasts: [] };

const timeoutMap = new Map<string, ReturnType<typeof setTimeout>>();

function toast(props: ToastType) {
  const id = genId();
  const newToast = {
    ...props,
    id,
  }

  const newToastList = [...memoryState.toasts, newToast];
  memoryState = { toasts: newToastList }

  const timeout = setTimeout(() => {
    timeoutMap.delete(id);
    const newToastList = memoryState.toasts.filter((item) => item.id !== id);
    memoryState = { toasts: newToastList }

    updateAllInstances(memoryState);
  }, 3000)
  timeoutMap.set(id, timeout)
  updateAllInstances(memoryState);
}

function updateAllInstances(state: State) {
  listeners.forEach((listener) => {
    listener(state)
  })
}


const useToast = () => {
  const [state, setState] = useState(memoryState);

  useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1)
      }
    }

  }, [state]);
  return (
    {
      ...state,
      toast
    }
  )
}

export { useToast };
