/** @jsxImportSource theme-ui */

import { Flex } from "@theme-ui/components";

const ResumeSidebar = () => {
  return (
    <Flex
      sx={{
        padding: 2,
      }}
    >
      <ul sx={{ padding: 0, margin: 0 }}>
        <li sx={{ listStyle: "none" }}>Skills</li>
        <li sx={{ listStyle: "none" }}>Experience</li>
        <li sx={{ listStyle: "none" }}>Education</li>
      </ul>
    </Flex>
  );
};

export default ResumeSidebar;
