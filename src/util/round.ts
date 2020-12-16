export const round = (n: number, r?: number): number => {
  if (r === undefined) return Math.round(n);
  if (r >= 0) return Math.round(n * 10 ** r) / 10 ** r;
  return n;
};
