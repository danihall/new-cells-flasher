import { cellsLineChecker } from "./cellsLineChecker";

//type Tresult = Array<number>;

const computeResult = (
  cells: Array<null | string>,
  cells_per_line: number
): Array<number> => {
  const winning_lines: Array<Array<number>> = [];
  const params = {
    i: 0,
    cells,
    cells_per_line,
  };

  cells.forEach((cell, index, array) => {
    if (!cell || index >= array.length - 2) {
      return;
    }

    params.i = index;

    [
      cellsLineChecker.horizontal(params),
      cellsLineChecker.vertical(params),
      cellsLineChecker.diagonalRight(params),
      cellsLineChecker.diagonalLeft(params),
    ].forEach((line) => {
      if (line && line.length) {
        winning_lines.push(line);
      }
    });
  });

  return winning_lines.flat();
};

export { computeResult };
