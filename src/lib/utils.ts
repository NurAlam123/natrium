import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(...inputs));
}

export function textSplit(text: string, words: boolean = false): string[] {
  return words ? text.split(" ") : text.split("");
}

export function randomNumber(max: number, min: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
