export const animateRoot = (
  ref,
  prevHeight,
  currentHeight,
  duration,
  onfinish
) => {
  if (!ref.current) {
    return;
  }
  const animation = ref.current.animate(
    [
      {
        height: `${prevHeight}px`,
        overflow: "hidden",
        position: "relative"
      },
      {
        height: `${currentHeight}px`,
        overflow: "hidden",
        position: "relative"
      }
    ],
    { duration }
  );
  animation.onfinish = onfinish;
};

export const animatePrev = (ref, duration) => {
  if (!ref.current) {
    return;
  }
  ref.current.animate(
    [
      {
        opacity: 1
      },
      {
        opacity: 0
      }
    ],
    duration
  );
};

export const animateCurrent = (ref, prevHeight, duration) => {
  if (!ref.current) {
    return;
  }
  ref.current.animate(
    [
      {
        transform: `translateY(-${prevHeight}px)`,
        opacity: 0
      },
      {
        transform: `translateY(-${prevHeight}px)`,
        opacity: 1
      }
    ],
    duration
  );
};
