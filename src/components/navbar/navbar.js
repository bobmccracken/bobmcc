/** @jsxImportSource theme-ui */
import { Flex, NavLink } from "@theme-ui/components";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import GitIcon from "../../images/git.svg";
import LinkedinIcon from "../../images/linkedin.svg";
import PdgaIcon from "../../images/pdga.svg";

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
        <Flex
          sx={{
            mr: 2,
            flexDirection: "column",
          }}
        >
          <div
            sx={{
              fontWeight: "heading",
              fontSize: 5,
              whiteSpace: "nowrap",
            }}
          >
            Bob McCracken
          </div>
          <div>
            <Link
              href="https://github.com/bobmccracken"
              sx={{ variant: "links.social" }}
            >
              <GitIcon />
            </Link>
            <Link
              href="https://www.linkedin.com/in/robert-mccracken-a2098428"
              sx={{ variant: "links.social" }}
            >
              <LinkedinIcon />
            </Link>
            <Link
              href="https://www.pdga.com/player/75372"
              sx={{
                variant: "links.social",
              }}
            >
              <PdgaIcon />
            </Link>
          </div>
        </Flex>

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
