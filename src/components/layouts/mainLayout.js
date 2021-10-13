/** @jsxImportSource theme-ui */
import NavBar from "../navbar/navbar";
import Triangles, { Orientation } from "../triangles/triangles";
import "./global.css";

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
        }}
      >
        <Triangles
          orientation={Orientation.BOTTOM}
          size={15}
          count={50}
          color="highlight"
        />
        <Triangles
          orientation={Orientation.BOTTOM}
          size={15}
          count={10}
          color="orange"
        />
        <Triangles
          orientation={Orientation.BOTTOM}
          size={15}
          count={20}
          color="gray"
        />
      </div>
    </>
  );
};

export default MainLayout;
