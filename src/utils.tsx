export const rand = (min: number, max?: number): number => {
  if (max === undefined) {
    return Math.random() * (min + 1);
  }

  return Math.random() * (max - min) + min;
};

export function cx(...classNames: Array<string | object>) {
  let classNamesToBeReturned: string[] = [];

  classNames.filter(Boolean).forEach((className) => {
    if (typeof className === "string") {
      classNamesToBeReturned.push(className);
    } else {
      const entries = Object.entries(className);

      entries.forEach(([key, value]) => {
        if (value) {
          classNamesToBeReturned.push(key);
        }
      });
    }
  });

  return classNamesToBeReturned.join(" ");
}
