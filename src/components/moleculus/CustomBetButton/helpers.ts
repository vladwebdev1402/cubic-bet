export const parseNumber = (num: number) => {
  if (num > 6) return 6;
  else if (num < 1) return 1;
  else return num;
};
