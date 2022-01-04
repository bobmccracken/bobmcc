import { Grid, Link } from "@theme-ui/components";
import { Themed } from "@theme-ui/mdx";
import { DateTime } from "luxon";
import { Helmet } from "react-helmet";
import MainLayout from "../components/layouts/mainLayout";
import Job from "../components/resume/job";
import Skill from "../components/resume/skill/skill";
import Section from "../components/section/section";
import AWSIcon from "../images/svgs/aws.svg";
import CssIcon from "../images/svgs/css.svg";
import CypressIcon from "../images/svgs/cypress.svg";
import GitIcon from "../images/svgs/git.svg";
import HtmlIcon from "../images/svgs/html.svg";
import I18NextIcon from "../images/svgs/i18next.svg";
import JavaIcon from "../images/svgs/java.svg";
import JavascriptIcon from "../images/svgs/javascript.svg";
import MongoIcon from "../images/svgs/mongo.svg";
import MuiIcon from "../images/svgs/mui.svg";
import MySQLIcon from "../images/svgs/mysql.svg";
import ReactIcon from "../images/svgs/react-icon.svg";
import ReduxIcon from "../images/svgs/redux.svg";
import SpringBootIcon from "../images/svgs/spring-boot.svg";
import StyledElementsIcon from "../images/svgs/styled-elements.svg";

const ResumePage = ({ data }) => {
  return (
    <MainLayout>
      <Helmet title="Resume" />
      <Themed.h1>Resume</Themed.h1>
      <Section>
        <Themed.h2>Skills</Themed.h2>
        <Grid width={[146, 180]}>
          <Skill
            svg={<JavascriptIcon />}
            name="JavaScript"
            href="https://www.javascript.com/"
          />
          <Skill svg={<ReactIcon />} name="React" href="https://reactjs.org/" />
          <Skill
            svg={<ReduxIcon />}
            name="Redux"
            href="https://redux.js.org/"
          />
          <Skill svg={<MuiIcon />} name="Material UI" href="https://mui.com/" />
          <Skill
            svg={<StyledElementsIcon />}
            name="Styled Components"
            href="https://www.styled-components.com/"
          />
          <Skill
            svg={<CypressIcon />}
            name="Cypress"
            href="https://www.cypress.io/"
          />
          <Skill
            svg={<I18NextIcon />}
            name="i18next"
            href="https://www.i18next.com/"
          />
          <Skill
            svg={<HtmlIcon />}
            name="HTML"
            href="https://developer.mozilla.org/en-US/docs/Web/HTML"
          />
          <Skill
            svg={<CssIcon />}
            name="CSS"
            href="https://developer.mozilla.org/en-US/docs/Web/CSS"
          />
          <Skill svg={<JavaIcon />} name="Java" href="https://www.java.com/" />
          <Skill
            svg={<SpringBootIcon />}
            name="Spring Boot"
            href="https://spring.io/projects/spring-boot"
          />
          <Skill
            svg={<MongoIcon />}
            name="MongoDB"
            href="https://www.mongodb.com/"
          />
          <Skill
            svg={<MySQLIcon />}
            name="MySQL"
            href="https://www.mysql.com/"
          />
          <Skill svg={<GitIcon />} name="Github" href="https://github.com/" />
          <Skill svg={<AWSIcon />} name="AWS" href="https://aws.amazon.com/" />
        </Grid>
      </Section>

      <Section>
        <Themed.h2>Work Experience</Themed.h2>
        <Job
          title="Lead Web Developer"
          company={<Link href="https://incentivio.com">Incentivio</Link>}
          startDate={DateTime.fromISO("2019-08-01")}
          endDate={DateTime.now()}
        >
          <Themed.p>
            For most of my time at Incentivio I have served as the Lead
            Developer on our web ordering app. This is a multi-tenant app used
            by 100s of restaurants and serving ~200,000 sessions per month. See{" "}
            <Link href="https://order.incentivio.com/c/puravidamiami">
              Pura Vida Miami
            </Link>
            , for one example.
          </Themed.p>

          <Themed.p>
            The application is written in React. Aside from development, I was
            responsible for architecting the application, developing CI/CD
            processes (GitHub Actions), and provisioning cloud based
            infrastructure (AWS CloudFront).
          </Themed.p>
        </Job>

        <Job
          title="Full Stack Software Engineer"
          company={<Link href="https://aeturnum.com/">Aeturnum</Link>}
          startDate={DateTime.fromISO("2013-01-01")}
          endDate={DateTime.fromISO("2018-09-01")}
        >
          <Themed.p>
            Aeturnum helps startups get off the ground by providing development
            services, with a large pool of developers overseas in Sri Lanka.
            When I started, I was one of few developers in the US. Over time I
            moved more into a project management role, interacting with clients
            and managing overseas developers. Even still, I always managed to do
            some development, which I preferred.
          </Themed.p>

          <Themed.p>
            I worked with a lot of different technologies with Aeturnum, some of
            which seem ancient now. Initially it was Groovy on Grails, or just
            Grails. I did a little bit with Ruby on Rails as well. Once front
            end frameworks became a little more mature, I started working with
            Angular 1.x and Spring boot on the backend.
          </Themed.p>

          <Themed.p>
            It was during my time with Aeturnum that I first started working
            with AWS as well. When I became responsible for my own projects, it
            was up to me to privision the proper infrastructure on AWS. Back
            then it was a lot of low level EC2, but I did a little with Elastic
            Beanstalk as well.
          </Themed.p>
        </Job>

        <Job
          title="Junior Software Engineer"
          company="Stark Investments"
          startDate={DateTime.fromISO("2007-11-01")}
          endDate={DateTime.fromISO("2008-10-28")}
        >
          <Themed.p>
            I started working for Stark as an intern while I was still studying
            Computer Science. Upon graduation I continued to work there for a
            short while.
          </Themed.p>
          <Themed.p>
            I was a member of the reconciliation team, which meant I used Perl
            to process reports and spreadsheets sent to us by clients and
            partners. That data was then compared against our records. It was
            pretty boring, in retrospect.
          </Themed.p>
          <Themed.p>
            In 2008 the housing market went to hell and so did many of Stark's
            investments. I was one of ~70% of their workforce laid off.
          </Themed.p>
        </Job>
      </Section>
    </MainLayout>
  );
};

export default ResumePage;
