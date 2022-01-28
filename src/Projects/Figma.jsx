import React, { Fragment } from "react";
import Figzoom from "./FigZoom";
import '../index.css'

function Figma() {
  return (
    <Fragment>
      <div className="bg-midblue">
        <h1 className="allura text-gray text-5xl md:text-5xl text-center p-10">Figma</h1>
          <Figzoom />
      </div>
    </Fragment>
  );
}

export default Figma;
