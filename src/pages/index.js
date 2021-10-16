import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import MainLayout from "../components/layouts/mainLayout";

const IndexPage = ({ data }) => {
  return (
    <MainLayout>
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
