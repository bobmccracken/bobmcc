import { Helmet } from "react-helmet";

const AppHelmet = (props) => {
  return <Helmet htmlAttributes={{ lang: "en" }} {...props} />;
};

export default AppHelmet;
