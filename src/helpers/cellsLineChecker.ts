type TCells = Array<null | string>;
type TCheck = false | Array<number>;
interface IParams {
  i: number;
  cells_per_row: number;
  cells: TCells;
}
const cellsLineChecker = {
  _check(indexes: Array<number>, cells: TCells) {
    return (
      cells[indexes[0]] === cells[indexes[1]] &&
      cells[indexes[1]] === cells[indexes[2]] &&
      indexes
    );
  },
  horizontal({ i, cells }: IParams): TCheck {
    const indexes = [i, i + 1, i + 2];
    return this._check(indexes, cells);
  },
  vertical({ i, cells_per_row, cells }: IParams): TCheck {
    const indexes = [i, i + cells_per_row, i + cells_per_row * 2];
    return this._check(indexes, cells);
  },
  diagonalRight({ i, cells_per_row, cells }: IParams): TCheck {
    if (cells_per_row - (i % cells_per_row) < 3) {
      return false;
    }
    const indexes = [i, i + cells_per_row + 1, i + cells_per_row * 2 + 2];
    return this._check(indexes, cells);
  },
  diagonalLeft({ i, cells_per_row, cells }: IParams): TCheck {
    if (i % cells_per_row < 2) {
      return false;
    }
    const indexes = [i, i + cells_per_row - 1, i + cells_per_row * 2 - 2];
    return this._check(indexes, cells);
  },
};

export { cellsLineChecker };
