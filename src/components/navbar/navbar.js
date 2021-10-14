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
        p: 4,
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
      </Flex>
      <Flex
        sx={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          ml: 2,
          zIndex: 1,
          flex: 1,
        }}
      >
        <div
          sx={{
            fontWeight: "heading",
            fontSize: 5,
            whiteSpace: "nowrap",
            mr: 2,
          }}
        >
          Bob McCracken
        </div>

        <div sx={{ whiteSpace: "nowrap" }}>
          <NavLink as={Link} to="/">
            About
          </NavLink>
          <NavLink as={Link} to="/resume">
            Resume
          </NavLink>
        </div>
      </Flex>
    </Flex>
  );
};

export default NavBar;
