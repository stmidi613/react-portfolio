import React, { Fragment } from "react";
import rocketsite from "./Pictures/rocketsite.png";
import palehorse from "./Pictures/palehorse.png";
import password from "./Pictures/password.png";
import bingo from "./Pictures/bingo.png";

function Github() {
  return (
    <Fragment>
      <div className="h-[825px] bg-teal">
        <h1 className="text-5xl text-yellow text-center p-10">Github</h1>
        <div className="flex flex-row justify-around">
          <div className="flex flex-col justify-around">
            <div className="flex flex-wrap justify-between w-[500px]">
              <span className="text-yellow text-xl ml-2">
                Hover over the pictures and click to go to the site.
              </span>
              <img src={rocketsite} alt="" className="m-2 w-48 h-32" />
              <img src={palehorse} alt="" className="m-2 w-48 h-32" />
              <p className="text-white my-10 mx-2 w-[500px]">
                The bingo card, password generator, and rocket repair landing
                page were all completed with vanilla Javascript, HTML, and CSS.
                The slide carousel on the landing page is a bootstrap component.
                The Pale Horse project was my first react project with CSS
                tailwinds.
              </p>
              <img src={password} alt="" className="m-2 w-32 h-48" />
              <img src={bingo} alt="" className="m-2 w-32 h-48" />
            </div>
          </div>
          <div>
            <div
              id="zoombox"
              className="bg-[#E5E5E5] flex flex-wrap justify-center items-center mx-2 border-8 border-yellow rounded-md h-[625px] w-[865px]"
            >
              <div className="flex flex-wrap justify-between w-[500px]">
                <img src={rocketsite} alt="" className="m-2 w-32 h-24" />
                <img src={palehorse} alt="" className="m-2 w-32 h-24" />
              </div>
              <div className="flex flex-wrap justify-between w-[500px]">
                <img src={password} alt="" className="m-2 w-24 h-32" />
                <img src={bingo} alt="" className="m-2 w-24 h-32" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Github;
