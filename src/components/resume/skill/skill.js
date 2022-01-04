import { Box, Card, Flex, Link } from "@theme-ui/components";
import { Fade } from "react-awesome-reveal";

const Skill = ({
  svg,
  name,
  href,
  svgSx = { height: "90px", width: "90px" },
}) => {
  return (
    <Fade direction="up">
      <Link
        href={href}
        sx={{
          textDecoration: "none",
          "&:hover,&:focus": { textDecoration: "underline" },
        }}
      >
        <Card variant="skill">
          <Flex sx={{ flexDirection: "column", alignItems: "center" }}>
            <Box sx={svgSx}>{svg}</Box>
            <Flex sx={{ mt: 2, textAlign: "center", fontSize: [2, 3] }}>
              {name}
            </Flex>
          </Flex>
        </Card>
      </Link>
    </Fade>
  );
};

export default Skill;
