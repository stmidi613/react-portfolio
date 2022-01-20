import React, { Fragment } from "react";
import kanjiui from "./Pictures/kanjiui.png";
import kanjiux from "./Pictures/kanjiux.png";
import ph from "./Pictures/palehorse.png";
import rocket from "./Pictures/rocket.png";

function Figma() {
  return (
    <Fragment>
      <div className="h-[825px] bg-lightblue">
        <h1 className="text-5xl text-gold text-center p-10">Figma</h1>
        <div className="flex flex-row justify-around">
          <div className="flex flex-col justify-around">
            <div className="flex flex-wrap justify-between w-[500px]">
            <span className="text-gold text-xl ml-2">Hover over the pictures and click to go to the site.</span>
              <img src={rocket} alt="" className="m-2 w-48 h-32" />
              <img src={ph} alt="" className="m-2 w-48 h-32" />
            <p className="text-white my-10 mx-2 w-[500px]">
              I have completed all my ux/ui projects on Figma. The kanji
              projects are not yet complete. The rocket repair was my first
              landing page and the pale horse project was my first attempt at a
              full website design.
            </p>
              <img src={kanjiux} alt="" className="m-2 w-48 h-32" />
              <img src={kanjiui} alt="" className="m-2 w-48 h-32" />
            </div>
          </div>
          <div>
            <div
              id="zoombox"
              className="bg-[#E5E5E5] flex flex-wrap justify-center items-center mx-2 border-8 border-gold rounded-md h-[625px] w-[865px]"
            >
              <div className="flex flex-wrap justify-between w-[500px]">
                <img src={rocket} alt="" className="m-2 w-24 h-32" />
                <img src={ph} alt="" className="m-2 w-32 h-24" />
              </div>
              <div className="flex flex-wrap justify-between w-[500px]">
                <img src={kanjiux} alt="" className="m-2 w-24 h-32" />
                <img src={kanjiui} alt="" className="m-2 w-32 h-24" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Figma;
