const tuple = <month extends string[]>(...args: month) => args;
export const months = tuple(
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
);

