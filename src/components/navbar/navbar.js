import React from "react";
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Flex, NavLink } from "@theme-ui/components";
import { useThemeUI } from "@theme-ui/core";
import { Link } from "gatsby";

const NavBar = () => {
  const { theme } = useThemeUI();

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
      <div
        sx={{
          fontWeight: "heading",
          fontSize: 5,
          whiteSpace: "nowrap",
          // flex: 1,
        }}
      >
        Bob McCracken
      </div>
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
