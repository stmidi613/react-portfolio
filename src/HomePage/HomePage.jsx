import React, { Fragment } from "react";
import FutureGoals from "./FutureGoals";
import Header from "./Header";
import About from "./About";
import Skills from "./Skills";

function HomePage() {
  return (
    <Fragment>
      <Header />
      <About />
      <Skills />
      <FutureGoals />
    </Fragment>
  );
}

export default HomePage;
