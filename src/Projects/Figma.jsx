import React, { Fragment } from "react";
import Figzoom from "./FigZoom";
import proj0 from "./Pictures/kanjiui.png";
import proj1 from "./Pictures/kanjiux.png";
import proj2 from "./Pictures/palehorse.png";
import proj3 from "./Pictures/rocket.png";

const projects = [proj0, proj1, proj2, proj3]

function Figma() {
  return (
    <Fragment>
      <div className="h-[825px] bg-darkblue">
        <h1 className="text-5xl text-gold text-center p-10">Figma</h1>
          <div className="flex flex-col md:flex-row justify-between">
            <p className="text-white my-3 mx-2 md:w-1/4">
              I have completed all my ux/ui projects on Figma. The kanji
              projects are not yet complete. The rocket repair was my first
              landing page and the pale horse project was my first attempt at a
              full website design.
            </p>
          <div className="float-right w-4/5">
          </div>
          </div>
          <Figzoom />
      </div>
    </Fragment>
  );
}

export default Figma;
