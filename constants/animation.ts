const itemOpacity = {
  hidden: { opacity: 0, scale: 0.5, transition: { duration: 0.5  } },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5 ,damping:300 } },
};

const LeftAnimation = {
  hidden: {
    opacity: 0,
    x: -100,
    transition: {
      type: "spring",
      duration: 0.7,
      damping:40,
      stiffness:80,
      
    },
  },
  show: {
    opacity: 1,
    x: 0,

    transition: {
      type: "spring",
      duration: 0.7,
      damping:40,
      stiffness:80,
      delay:0.5,
      
     
    },
  },
};



const RightAnimation = {
  hidden: {
    opacity: 0,
    x: 100,
    transition: {
      type: "spring",
      ease: "linear",
      duration: 2,
      damping:40,
      stiffness:100,
    },
  },
  show: {
    opacity: 1,
     x: 0,

    transition: {
      type: "spring",
      ease: "linear",
      damping:40,
      stiffness:100,
      delay: 0.5,
    },
  },
};


const upAnimation = {
  hidden: {
    opacity: 0,
    y:50,
    transition: {
      type: "spring",
      damping:45,
      stiffness:300,
      

    },
  },
  show: {
    opacity: 1,
    y: 0,

    transition: {
      type: "spring",
      duration: 0.7,
      damping:45,
      stiffness:300,
      delay:0.5,
    },
  },
};

const DownAnimation = {
  hidden: {
    opacity: 0,
    y:-50,
    transition: {
      type: "spring",
      damping:20,
       stiffness:80,
       duration: 0.5,
      

    },
  },
  show: {
    opacity: 1,
    y: 0,

    transition: {
      type: "spring",
      duration: 0.7,
      damping:20,
      stiffness:80,
      delay:0.5,
    },
  },
};

export { itemOpacity, upAnimation, LeftAnimation, RightAnimation , DownAnimation };
