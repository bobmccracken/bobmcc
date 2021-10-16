import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Helmet } from "react-helmet";
import MainLayout from "../components/layouts/mainLayout";

const IndexPage = ({ data }) => {
  return (
    <MainLayout>
      <Helmet title="About" />
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
