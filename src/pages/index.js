import { StaticImage } from "gatsby-plugin-image";
import MainLayout from "../components/layouts/mainLayout";
/** @jsx jsx */
import { jsx } from "theme-ui";

const IndexPage = () => {
  return (
    <MainLayout>
      {/* <StaticImage
        alt="me"
        src="../images/me.jpg"
        sx={{ height: "175px", width: "175px", borderRadius: "10px" }}
      /> */}
      <p>hi</p>
    </MainLayout>
  );
};

export default IndexPage;
