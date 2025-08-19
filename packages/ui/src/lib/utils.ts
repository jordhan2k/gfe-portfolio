import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalize(input: string) {
  if (!input || typeof input !== "string") return "";
  return input.charAt(0).toUpperCase() + input.substring(1);
}

export function formatNumberToGroup(value: number): string {
  if (!value) return "";
  return value.toLocaleString("en-US");
}
