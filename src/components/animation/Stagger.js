const stagger = () => {
  return {
    animate: {
      transition: {
        delayChildren: 1,
        staggerChildren: 1,
      },
    },
  };
};

export default stagger;
