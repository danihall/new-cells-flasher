const makeArray = (cellsPerRow: number): Array<null> => {
  return Array.from({ length: Math.pow(cellsPerRow, 2) }, () => null);
};

export { makeArray };
