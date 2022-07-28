export const indexCompare = <T extends string | number>(sorting: Array<T>) => {
  const indexHash = Object.fromEntries(
    sorting.map((item, index) => [item, index]),
  );
  return (a: T, b: T) => {
    const aIndex = indexHash[a] ?? -1;
    const bIndex = indexHash[b] ?? -1;
    return aIndex - bIndex;
  };
};