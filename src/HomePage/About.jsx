import React, { Fragment } from "react";
import about from "../Pictures/aboutme.png";
import '../index.css'

function About() {
  return (
    <Fragment>
      <div className="bg-teal h-[650px] flex flex-col sm:flex-row items-center">
        <img src={about} alt="" className="float-left my-4 ml-10 w-32 md:w-96" />
        <div className="mx-12">
          <h2 className="sm:text-5xl text-yellow ml-12">About Me</h2>
          
          <p className="text-white mt-4 text-xs md:text-sm">
            In late December of 2020, I decided to learn to code and began my
            new exciting journey in life. Sick of the education system and way
            foreign teachers were treated by Japanese society, I began learning
            to code in Kyoto, Japan. I have loved coding from the time I started
            and found that I have a knack for it. I grew up in New Jersey, USA
            but have moved and settled in Japan because it feels like home to
            me.
            </p>
            <br />
            <ol className="text-white mx-12 text-xs sm:text-sm">
              Some facts about me are:
              <li>1. Love code wars</li>
              <li>
                2. Have lived in
                <li>USA: New Jersey, Florida, and California</li>
                <li>
                  Japan: Okinawa, Yokohama, Hikone, Nara, Kyoto, and Osaka
                </li>
              </li>
              <li>3. Volunteer to feed the homeless.</li>
            </ol>
          
          
        </div>
      </div>
    </Fragment>
  );
}

export default About;
