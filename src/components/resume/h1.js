/** @jsxImportSource theme-ui */

const H1 = ({ children, ...rest }) => {
  return (
    <h1
      {...rest}
      sx={
        {
          // a: {
          //   visibility: "hidden",
          //   position: "absolute",
          // },
        }
      }
    >
      {children}
    </h1>
  );
};

export default H1;
