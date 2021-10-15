import { Box, Flex, Text } from "@theme-ui/components";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { DateTime } from "luxon";
import MainLayout from "../components/layouts/mainLayout";

const birthday = DateTime.fromObject({ year: 1982, month: 11, day: 28 });

const IndexPage = ({ data }) => {
  const age = DateTime.local().diff(birthday, ["years", "months", "days"]);

  return (
    <MainLayout>
      <Box>
        <div>
          <Text sx={{ fontSize: 2 }}>
            {age.years} years, {age.months} months and {Math.floor(age.days)}{" "}
            days old
          </Text>
        </div>
        <div>
          <Text sx={{ fontSize: 2 }}>Living in Florida</Text>
        </div>
      </Box>
      <MDXRenderer>{data?.mdx?.body}</MDXRenderer>
    </MainLayout>
  );
};

export const query = graphql`
  query {
    mdx(frontmatter: { title: { eq: "About" } }) {
      body
    }
  }
`;

export default IndexPage;
