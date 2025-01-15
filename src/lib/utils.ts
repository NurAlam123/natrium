import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(...inputs));
}

export function textSplit(text: string, words: boolean = false): string[] {
  return words ? text.split(" ") : text.split("");
}
