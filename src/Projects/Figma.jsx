import React, { Fragment } from "react";
import Figzoom from "./FigZoom";

function Figma() {
  return (
    <Fragment>
      <div className="bg-darkblue">
        <h1 className="text-3xl md:text-5xl text-yellow text-center p-10">Figma</h1>
          <Figzoom />
      </div>
    </Fragment>
  );
}

export default Figma;
