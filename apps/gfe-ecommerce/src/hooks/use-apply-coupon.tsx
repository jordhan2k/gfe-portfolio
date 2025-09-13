import { IApplyDiscount } from "@/types";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";

type ApplyCouponCodeParams = {
  code: string
}
const applyCouponCode = async (params: ApplyCouponCodeParams): Promise<IApplyDiscount> => {
  const { code } = params;
  const requestOptions: RequestInit = {
    method: 'PUT',
    body: JSON.stringify({
      coupon_code: code
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const res = await fetch('https://www.greatfrontend.com/api/projects/challenges/e-commerce/coupons/apply', requestOptions);
  const result: IApplyDiscount = await res.json();
  if (result.error) {
    throw new Error("Sorry, but this coupon doesn't exist.")
  }
  return result;
}

type UseAddToCartOptions = UseMutationOptions<
  IApplyDiscount, // response type
  Error,        // error type
  ApplyCouponCodeParams // variables type
>;

const useApplyCouponCode = (configs: UseAddToCartOptions) => {
  return useMutation({
    ...configs,
    mutationFn: applyCouponCode
  })
}

export { useApplyCouponCode }