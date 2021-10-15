import { Flex } from "@theme-ui/components";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import MainLayout from "../components/layouts/mainLayout";
// import { ThemeProvider } from "theme-ui";
// import theme from "../gatsby-plugin-theme-ui/index";
// import components from "../components/resume/components";

const ResumePage = ({ data }) => {
  return (
    <MainLayout>
      <Flex
        sx={{
          flexWrap: "wrap",
          justifyContent: "flex-start",
        }}
      >
        <Flex sx={{ marginRight: 6, display: [null, "none"] }}>
          <ul>
            <li>one</li>
            <li>two</li>
            <li>three</li>
          </ul>
        </Flex>
        <div sx={{ minWidth: "400px" }}>
          <MDXRenderer>{data?.mdx?.body}</MDXRenderer>
        </div>
      </Flex>
    </MainLayout>
  );
};

export const query = graphql`
  query {
    mdx(frontmatter: { title: { eq: "Bob McCracken Resume" } }) {
      body
      tableOfContents
    }
  }
`;

export default ResumePage;
