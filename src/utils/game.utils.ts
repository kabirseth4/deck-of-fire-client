export const shuffle = (arr: any[]) => {
  let remaining = arr.length;
  let tmp;
  let idx: number;

  while (remaining) {
    idx = Math.floor(Math.random() * remaining--);

    tmp = arr[remaining];
    arr[remaining] = arr[idx];
    arr[idx] = tmp;
  }
};

export const drawCard = <T>(arr: T[]): T => {
  const drawnCard: T = arr[0];
  arr.splice(0, 1);
  return drawnCard;
};
