import { useRef, useEffect, useCallback, memo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { animateLine } from "../../helpers/animateLine";
import { selectCellsPerRow } from "../../store/features/cellsState";
import { drawingIsDone } from "../../store/features/linesAreDrawn";

import css from "./Lines.module.scss";

interface ILinesProps {
  shouldAnimate?: boolean;
  forceCellsPerRow?: number;
}

interface ILinesRef {
  current: Array<HTMLDivElement>;
}

const css_vertical = [css.lines, css.vertical].join(" ");
const css_horizontal = [css.lines, css.horizontal].join(" ");

const Lines = memo(
  ({
    shouldAnimate = true,
    forceCellsPerRow = 0,
  }: ILinesProps): JSX.Element => {
    const cells_per_row = forceCellsPerRow
      ? forceCellsPerRow
      : useSelector(selectCellsPerRow);
    const lines_count = (cells_per_row - 1) * 2;
    const lines_vertical: ILinesRef = useRef([]);
    const lines_horizontal: ILinesRef = useRef([]);
    const dispatch = useDispatch();

    const addToLines = useCallback(
      (line: HTMLDivElement | null, index: number) => {
        if (line) {
          const ref = lines_vertical.current[index]
            ? lines_horizontal.current
            : lines_vertical.current;
          ref.push(line);
        }
      },
      [cells_per_row]
    );

    const handleAnimationEnd = () => {
      dispatch(drawingIsDone(true));
    };

    useEffect(() => {
      if (!shouldAnimate) {
        return;
      }

      if (lines_vertical.current.length) {
        const middle_line = Math.floor(lines_vertical.current.length / 2);

        dispatch(drawingIsDone(false));

        /** Restart animations */
        for (let i = 0; i <= middle_line; i++) {
          animateLine(
            i,
            middle_line,
            lines_vertical.current,
            lines_horizontal.current
          );
        }
      }

      lines_vertical.current.length = 0;
      lines_horizontal.current.length = 0;
    }, [cells_per_row]);

    return (
      <>
        <div
          className={
            shouldAnimate
              ? css_vertical
              : `${css_vertical} ${css["no-animation"]}`
          }
        >
          {Array.from({ length: lines_count / 2 }, (_, index) => (
            <div
              key={index.toString()}
              ref={shouldAnimate ? (line) => addToLines(line, index) : null}
              onAnimationEnd={index === 0 ? handleAnimationEnd : undefined}
            ></div>
          ))}
        </div>

        <div
          className={
            shouldAnimate
              ? css_horizontal
              : `${css_horizontal} ${css["no-animation"]}`
          }
        >
          {Array.from({ length: lines_count / 2 }, (_, index) => (
            <div
              key={index.toString()}
              ref={shouldAnimate ? (line) => addToLines(line, index) : null}
            ></div>
          ))}
        </div>
      </>
    );
  }
);

export default Lines;
