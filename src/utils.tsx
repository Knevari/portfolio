export const rand = (min: number, max?: number): number => {
  if (max === undefined) {
    return Math.random() * (min + 1);
  }

  return Math.random() * (max - min) + min;
};
