import dynamic from "next/dynamic";
import Head from "next/head";
import About from "../src/components/About";
import Blog from "../src/components/Blog";
import Contact from "../src/components/Contact";
import Home from "../src/components/Home";
import Resume from "../src/components/Resume";
import AboutMe from "../src/components/sections/AboutMe";
import BlogSection from "../src/components/sections/Blog";
import Clients from "../src/components/sections/Clients";
import ContactForm from "../src/components/sections/ContactForm";
import ContactInfo from "../src/components/sections/ContactInfo";
import FunFact from "../src/components/sections/FunFact";
import Pricing from "../src/components/sections/Pricing";
import Quote from "../src/components/sections/Quote";
import ResumeSection from "../src/components/sections/Resume";
import Services from "../src/components/sections/Services";
import Skills from "../src/components/sections/Skills";
import Testimonials from "../src/components/sections/Testimonials";
import TypingAnimation from "../src/components/TypingAnimation";
import Work from "../src/components/Work";
import ContentContainer from "../src/layout/ContentContainer";
import Header from "../src/layout/Header";
import Layout from "../src/layout/Layout";
const RecentWorks = dynamic(
  () => import("../src/components/sections/RecentWorks"),
  {
    ssr: false,
  }
);

const bio = `<p>
<strong>Hello! I’m Alex Jordan.</strong>
A seasoned DevOps Engineer with a strong focus on automation and infrastructure as code. Specializes in using Ansible to streamline software deployments, configuration management, and continuous integration processes. Demonstrates a proven track record of leveraging Ansible to enhance operational efficiencies, reduce deployment times, and ensure consistency across development, testing, and production environments. Passionate about embracing new technologies to solve complex technical challenges in cloud-based architectures..
</p>`;

const services = [
  {
    icon: "fa fa-html5",
    title: "Front-end",
    desc: "Modern and mobile-ready website that will help you reach all of your marketing.",
  },
  {
    icon: "fa fa-code",
    title: "Back-End",
    desc: "UI/UX focus on the user, frontend focus on the settings of the user, and backend focus on the data.",
  },
  {
    icon: "fa fa-wordpress",
    title: "WordPress Development",
    desc: "WordPress development services improve business websites.",
  },
  {
    icon: "fa fa-server",
    title: "WordPress Security",
    desc: "Security consultants can check the code and scan for vulnerabilities.",
  },
];

const animationText = [
  "Kubernetes Engineer",
  "LMS Hosting and Content Management",
  "Freelancer",
];

const Index3 = () => {
  return (
    <Layout bg={"gradient"}>
      <Head>
        <link rel="stylesheet" href="css/new-skin/new-skin.css" />
        <link rel="stylesheet" href="css/demos/demo-3-colors.css" />
        <link rel="stylesheet" href="css/new-skin/classic-skin.css" />
      </Head>
      <Header noSideBarBtn animationText={animationText} />
      <Home>
        <div className="profile no-photo">
          {/* profile image */}
          <div
            className="slide"
            style={{ backgroundImage: "url(images/headshot.jpg)" }}
          />
          {/* profile titles */}
          <div className="title">Alex Jordan</div>

          <TypingAnimation data={animationText} />
          {/* profile socials */}
          <div className="social">
            {/* <a target="_blank" rel="noreferrer" href="https://dribbble.com/">
              <span className="fa fa-dribbble" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://twitter.com/">
              <span className="fa fa-twitter" />
            </a> */}
            <a target="_blank" rel="noreferrer" href="https://github.com/account">
              <span className="fa fa-github" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/account">
              <span class="fa fa-linkedin" />
            </a>
            {/* <a target="_blank" rel="noreferrer" href="https://www.spotify.com/">
              <span className="fa fa-spotify" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://stackoverflow.com/"
            >
              <span className="fa fa-stack-overflow" />
            </a> */}
          </div>
          {/* profile buttons */}
          <div className="lnks">
            <a href="/doc/alex_jordan_cv.pdf" className="lnk" download>
              <span className="text">Download CV</span>
              <span className="ion ion-android-download" />
            </a>
          </div>
        </div>
      </Home>
      <ContentContainer>
        <About>
          <AboutMe bio={bio} />
          {/* <Services serviceList={services} /> */}
          {/* <Pricing /> */}
          {/* <Clients /> */}
          {/* <Testimonials /> */}
          {/* <FunFact /> */}
        </About>
        <Resume>
          <ResumeSection />
          <Skills />
          <Quote />
        </Resume>
        <Work>
          <RecentWorks />
        </Work>
        <Blog>
          <BlogSection />
        </Blog>
        <Contact>
          <ContactInfo />
          <ContactForm />
        </Contact>
      </ContentContainer>
    </Layout>
  );
};
export default Index3;
