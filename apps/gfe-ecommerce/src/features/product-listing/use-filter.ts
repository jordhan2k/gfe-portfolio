"use client";

import {
  CATEGORY_OPTIONS,
  COLLECTIONS_OPTIONS,
  COLORS_OPTIONS,
  RATING_OPTIONS,
} from "@/config";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMemo } from "react";

function useFilter(key: string) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const options = useMemo(() => {
    return Array.from(
      new Set(searchParams.getAll(key).join(",").split(",").filter(Boolean))
    );
  }, [searchParams, key]);

  const filterCount = useMemo(() => {
    const allFilters =
      [
        COLLECTIONS_OPTIONS.key,
        CATEGORY_OPTIONS.key,
        COLORS_OPTIONS.key,
        RATING_OPTIONS.key,
      ].reduce((prev, curr) => {
        return (
          Array.from(
            new Set(
              searchParams.getAll(curr).join(",").split(",").filter(Boolean)
            )
          ).length + prev
        );
      }, 0) ?? 0;

    return allFilters;
  }, [searchParams]);

  const sort = searchParams.get("sort");
  const direction = searchParams.get("direction");
  const page = searchParams.get("page");

  const onSelect = (value: string) => {
    const params = new URLSearchParams(searchParams);
    let values: string[] | string = params
      .getAll(key)
      .join(",")
      .split(",")
      .filter(Boolean);

    if (values.includes(value)) {
      values = values.filter((item) => item !== value).join(",");
    } else {
      values = [...values, value].join(",");
    }
    if (values.length) params.set(key, values);
    else params.delete(key);
    params.set("page", "1");
    router.replace(`${pathname}?${params.toString().replaceAll("%2C", ",")}`);
  };

  const onSortSelect = (sort?: string, direction?: string, page?: string) => {
    const params = new URLSearchParams(searchParams);
    sort && params.set("sort", sort);
    direction && params.set("direction", direction);
    page && params.set("page", page);
    if (sort || direction || page) {
      router.replace(`${pathname}?${params.toString().replaceAll("%2C", ",")}`);
    }
  };

  const clearFilters = () => {
    const params = new URLSearchParams(searchParams);
    params.delete(COLLECTIONS_OPTIONS.key);
    params.delete(CATEGORY_OPTIONS.key);
    params.delete(COLORS_OPTIONS.key);
    params.delete(RATING_OPTIONS.key);
    router.replace(`${pathname}?${params.toString().replaceAll("%2C", ",")}`);
  };

  return {
    options,
    onSelect,
    onSortSelect,
    sort,
    direction,
    page,
    clearFilters,
    filterCount,
  };
}

export default useFilter;
