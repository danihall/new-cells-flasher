type TElement = HTMLElement | SVGCircleElement | null;

const _getAnimation = (element: TElement) => {
  if (!element) {
    return;
  }

  return element.getAnimations()?.[0];
};

const restartAnimation = (element: TElement) => {
  const animation = _getAnimation(element);
  animation?.cancel();
  animation?.play();
};

const pauseAnimation = (element: TElement) => {
  const animation = _getAnimation(element);
  animation?.pause();
};

const forceAnimationEnd = (element: TElement) => {
  const animation = _getAnimation(element);
  animation?.finish();
};

export { restartAnimation, pauseAnimation, forceAnimationEnd };
