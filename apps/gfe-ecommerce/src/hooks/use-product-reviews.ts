import { IGetReviewListData } from "@/types";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

export const getProductReviews = async ({
  pageParam = 1,
  limit = 12,
  selectedRating,
  id,
}: {
  pageParam?: number;
  limit?: number;
  selectedRating?: number | null;
  id: string;
}) => {
  const url = `https://www.greatfrontend.com/api/projects/challenges/e-commerce/products/${id}/reviews?page=${pageParam}&per_page=${limit}${
    selectedRating ? `&rating=${selectedRating}` : ""
  }`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }

  const result = await response.json();

  return result as IGetReviewListData;
};

const useSelectedRating = (id: string) => {
  return useQuery<number | null>({
    initialData: null,
    queryKey: ["product-reviews", "selected-rating", id],
    queryFn: () => null,
  });
};

const useProductReviews = (id: string, selectedRating?: number | null) => {
  return useInfiniteQuery({
    queryKey: ["product-reviews", id, selectedRating],
    queryFn: ({ pageParam = 1 }) =>
      getProductReviews({
        pageParam,
        limit: 12,
        selectedRating,
        id,
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.pagination.has_more) {
        return lastPage.pagination.page + 1;
      }
      return undefined;
    },
  });
};

export { useProductReviews, useSelectedRating };
