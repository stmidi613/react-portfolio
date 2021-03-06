import React, { Fragment } from "react";
import about from "../Pictures/introportrait.png";
import "../index.css";
import Extras from "./Extras";

function About() {
  return (
    <Fragment>
      <main>
        <div className="bg-lightblue h-[650px] lg:h-[550px] flex flex-wrap flex-col sm:flex-row justify-around items-center p-4">
          <section aria-labelledby="aboutme-title" className="flex picflex">
            <img
              src={about}
              alt=""
              className="piccenter my-4 ml-10 w-32 md:max-w-96"
            />
            <div className="max-w-sm">
              <h3 id="aboutme-title" className="allura text-3xl sm:text-5xl text-yellow ml-12">
                About Me
              </h3>
              <p className="m-2 text-xs md:text-sm">
                Hello, my name is Stephen Dilks. In late December of 2020, I
                decided to learn to code and began my new exciting journey in
                life. I have loved coding from the time I started and found that
                I have a knack for it. I grew up in New Jersey, USA but have
                moved and settled in Japan because it feels like home to me.
              </p>
            </div>
          </section>
          <Extras />
        </div>
      </main>
    </Fragment>
  );
}

export default About;
