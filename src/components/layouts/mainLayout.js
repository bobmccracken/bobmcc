/** @jsxImportSource theme-ui */
import NavBar from "../navbar/navbar";
import Triangles, { Orientation } from "../triangles/triangles";
import { keyframes } from "@emotion/react";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  100% {
    transform: translateX(0%)
  }
`;

const MainLayout = ({ children }) => {
  return (
    <>
      <div
        sx={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
          flexDirection: "column",
          alignItems: "center",
          paddingBottom: 6,
        }}
      >
        <NavBar />
        <main sx={{ zIndex: 100, width: ["100%", "100%", "1000px"], p: 4 }}>
          {children}
        </main>
      </div>
      <div
        sx={{
          position: "fixed",
          bottom: "-10vh",
          right: "-15vh",
          left: 0,
          zIndex: 1,
          overflowX: "clip",
          height: "15vh",
          animation: `${fadeIn} 0.5s linear`,
        }}
      >
        <div
          sx={{
            position: "inherit",
            bottom: "inherit",
            right: "inherit",
            left: "inherit",
            transform: "translateX(-3%)",
            animation: `${slideIn} 0.5s forwards`,
          }}
        >
          <Triangles
            orientation={Orientation.BOTTOM}
            size={15}
            count={50}
            color="primary"
          />
        </div>
        <div
          sx={{
            position: "inherit",
            bottom: "inherit",
            right: "inherit",
            left: "inherit",
            transform: "translateX(3%)",
            animation: `${slideIn} 0.5s forwards`,
          }}
        >
          <Triangles
            orientation={Orientation.BOTTOM}
            size={15}
            count={20}
            color="secondary"
          />
          <Triangles
            orientation={Orientation.BOTTOM}
            size={15}
            count={10}
            color="orange"
          />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
