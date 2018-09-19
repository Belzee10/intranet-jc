import React from "react";
import Intro from "./Intro";
import ExternalLinks from "./ExternalLinks";

const Home = props => {
  return (
    <React.Fragment>
      <section id="intro">
        <Intro />
      </section>
      <section id="external-links">
        <ExternalLinks />
      </section>
    </React.Fragment>
  );
};

export default Home;
