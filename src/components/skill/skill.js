import { Card, Flex } from "@theme-ui/components";

const Skill = ({ icon, name, cardSx }) => {
  return (
    <Card variant="skill" sx={cardSx}>
      <Flex
        sx={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        {icon}
        <Flex sx={{ mt: 2, textAlign: "center", fontSize: [2, 3] }}>
          {name}
        </Flex>
      </Flex>
    </Card>
  );
};

export default Skill;
