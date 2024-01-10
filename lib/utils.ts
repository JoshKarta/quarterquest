import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(value: number, currency: string) {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: currency, // Change this to your desired currency code
    minimumFractionDigits: 2,
  });
}
