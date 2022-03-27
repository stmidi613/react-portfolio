import React, { Fragment } from "react";
import Figzoom from "./FigZoom";
import '../index.css'

function Figma() {
  return (
    <Fragment>
      <section aria-labelledby="figma-title" className="bg-midblue">
        <h2 id="figma-title" className="allura text-gray text-5xl md:text-5xl text-center p-10">
          Figma
        </h2>
          <Figzoom />
      </section>
    </Fragment>
  );
}

export default Figma;
