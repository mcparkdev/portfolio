const easing = [0.6, 0.01, -0.05, 0.9];

const fadeIn = (duration = 0.3, x = 0, y = 60, delay = 0) => {
  return {
    initial: {
      x,
      y,
      opacity: 0,
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration,
        ease: easing,
        delay,
      },
    },
    exit: {
      x: -x,
      y: -y,
      opacity: 0,
    },
  };
};

export default fadeIn;
