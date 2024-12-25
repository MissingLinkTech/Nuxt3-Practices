import { v4 as uuidv4 } from "uuid";

export const generateId = (): string => uuidv4();
export const truncateString = (
  str: string | undefined,
  num: number,
): string | undefined => {
  if (!str) return;
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + "...";
};
