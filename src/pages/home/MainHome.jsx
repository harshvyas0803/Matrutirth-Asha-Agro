import ExploreServices from "./home-components/ExploreServices";
import GetInTouch from "./home-components/GetInTouch";
import Hero from "./home-components/Hero";
import Partners from "./home-components/Partners";
import Updates from "./home-components/Updates";
import WhoWeServe from "./home-components/WhoWeServe";
import WelcomeToAshaAgro from "./home-components/WelcomeToAsha";
import Infrastructure from "./home-components/Infrastructure";
import Pillars from "./home-components/Pillars";
import Branches from "./home-components/OurBranches";

const MainHome = () => {
  return (
    <div>
      <Hero />
      <br />
      <br />
      <WelcomeToAshaAgro/>
      <br />
      <br />
      <Infrastructure/>
      <br />
      <br />
      <Pillars/>
      <br />
      <br />
      <ExploreServices />
      <br />
      <br />
      <Updates />
      <br />
      <br />
      <WhoWeServe />
      <br />
      <br />
      <GetInTouch />
      <br />
      <Branches/>
      <Partners />
    </div>
  );
};

export default MainHome;
