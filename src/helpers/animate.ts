import { restartAnimation } from "./animationHelpers";

/**
 * Takes advantage of the fact that a Tagged Template Literal uses a "frozen" Array,
 * wherer the "chunks" are always the same.
 * This makes creating multiple different string from the same Tagged Template Literal faster.
 */
const template = (chunks: TemplateStringsArray, rest: number): string =>
  chunks[0] + rest + chunks[1];
const createDelayString = (index: number): string =>
  template`animation-delay: ${index}ms`;

const animate = (
  index: number,
  middle_line_index: number,
  lines_vertical: Array<HTMLDivElement>,
  lines_horizontal: Array<HTMLDivElement>
) => {
  const line_left = lines_vertical[index];
  const line_top = lines_horizontal[index];

  if (index === middle_line_index && lines_vertical.length % 2 !== 0) {
    line_left.style.cssText = createDelayString(0);
    line_top.style.cssText = createDelayString(0);
    restartAnimation(lines_vertical[index]);
    restartAnimation(lines_horizontal[index]);
    return;
  }

  const line_right = lines_vertical[lines_vertical.length - 1 - index];
  const line_bottom = lines_horizontal[lines_horizontal.length - 1 - index];
  const delay = (middle_line_index - index) * 100;
  line_left.style.cssText = createDelayString(delay);
  line_right.style.cssText = createDelayString(delay);
  line_top.style.cssText = createDelayString(delay);
  line_bottom.style.cssText = createDelayString(delay);
  restartAnimation(line_left);
  restartAnimation(line_right);
  restartAnimation(line_top);
  restartAnimation(line_bottom);
};

export { animate };
