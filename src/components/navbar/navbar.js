/** @jsxImportSource theme-ui */
import { Flex, NavLink } from "@theme-ui/components";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const NavBar = () => {
  return (
    <Flex
      as="nav"
      sx={{
        width: ["100%", "100%", "100%", "1280px"],
        alignItems: "center",
        justifyContent: "space-between",
        p: 4,
        flexWrap: "wrap",
      }}
    >
      <Flex sx={{ flexDirection: "row", alignItems: "center" }}>
        <StaticImage
          src="../../images/me.jpg"
          sx={{
            width: ["50px", "100px"],
            height: ["50px", "100px"],
            minWidth: "50px",
            borderRadius: "100%",
            zIndex: 0,
          }}
        />
        <div
          sx={{
            marginLeft: "1rem",
            fontWeight: "heading",
            fontSize: 5,
            whiteSpace: "nowrap",
            zIndex: 1,
          }}
        >
          Bob McCracken
        </div>
      </Flex>
      <div sx={{ whiteSpace: "nowrap", ml: 2 }}>
        <NavLink as={Link} to="/">
          About
        </NavLink>
        <NavLink as={Link} to="/resume">
          Resume
        </NavLink>
      </div>
    </Flex>
  );
};

export default NavBar;
