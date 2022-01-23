import React, { Fragment } from "react";
import "./Projects.css";
import PSZoombox from "./PSZoombox";

function Photoshop() {
  return (
    <Fragment>
      <div className="h-[925px] sm:h-[825px] bg-lightblue md:pt-10">
        <h1 className="text-3xl md:text-5xl text-yellow text-center p-5 md:p-10">
          Photoshop
        </h1>
        <div className="flex flex-row">
          <div className="flex flex-row justify-center">
            <p className="mx-2 w-1/2">
              All the pictures were completed with Photoshop Elements. The first
              picture was a project I did to describe the year 2020. The other 
              pictures have a religious nature and are made as flyers and pamphlets.
            </p>
          </div>
        </div>
        <PSZoombox />
      </div>
    </Fragment>
  );
}

export default Photoshop;
