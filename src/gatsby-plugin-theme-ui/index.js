const theme = {
  breakpoints: ["600px", "1000px", "1280px"],
  colors: {
    orange: "#ef8610",
  },
  styles: {
    root: {
      fontSize: 3,
      lineHeight: 1.15,
      "-webkit-text-size-adjust": "100%",
      minWidth: "300px",
    },
    h1: {
      a: {
        visibility: "hidden",
        position: "absolute",
      },
    },
  },
  links: {
    nav: {
      color: "primary",
      ml: [3, 4],
      fontSize: [2, 3],
      "&:first-child": {
        ml: 0,
      },
    },
    social: {
      color: "primary",
      mr: 2,
      fontSize: [2, 3],
      textDecoration: "none",
      svg: {
        fill: "primary",
        width: "24px",
        height: "24px",
      },
    },
  },
};

export default theme;
