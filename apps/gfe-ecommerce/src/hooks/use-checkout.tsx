import { IGetOrder } from "@/types";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";


const checkoutFn = async (payload: any) => {
  const requestOptions: RequestInit = {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: { "Content-Type": "application/json" },
  }

  const response = await fetch('/api/orders', requestOptions);
  const result: CheckoutResponseType = await response.json();

  if (!result.success) {
    throw new Error('We faced a problem processing your checkout. Please try again or contact us.')
  }
  return result;
}

type CheckoutResponseType = {
  data: IGetOrder & { orderId: number };
  success: boolean;
}

type UseCheckoutOptions = UseMutationOptions<
  CheckoutResponseType, // response type
  Error,        // error type
  IGetOrder // variables type
>;

const useCheckout = (config: UseCheckoutOptions) => useMutation({
  ...config,
  mutationFn: checkoutFn,
})

export { useCheckout }