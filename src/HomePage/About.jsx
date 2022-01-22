import React, { Fragment } from "react";
import about from "../Pictures/introportrait.png";
import "../index.css";
import Extras from "./Extras";

function About() {
  return (
    <Fragment>
      <div className="bg-lightblue md:h-[650px] flex flex-wrap flex-col sm:flex-row justify-around items-center p-4">
        <div className="flex">
          <img
            src={about}
            alt=""
            className="my-4 ml-10 w-32 md:max-w-96"
          />
          <div className="max-w-sm">
            <h2 className="sm:text-3xl text-yellow mt-8 ml-12">About Me</h2>

            <p className="m-4 text-xs md:text-sm">
              Hello, my name is Stephen Dilks. In late December of 2020, I
              decided to learn to code and began my new exciting journey in
              life. I have loved coding from the time I started and found that I
              have a knack for it. I grew up in New Jersey, USA but have moved
              and settled in Japan because it feels like home to me.
            </p>
          </div>
        </div>
        <Extras />
      </div>
    </Fragment>
  );
}

export default About;
