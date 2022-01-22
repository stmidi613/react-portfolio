import React, { Fragment } from "react";
import "./Projects.css";
import PSZoombox from "./PSZoombox";


function Photoshop() {
  return (
    <Fragment>
      <div className="h-[925px] sm:h-[825px] bg-lightblue md:pt-10">
        <h1 className="text-3xl md:text-5xl text-yellow text-center p-5 md:p-10">Photoshop</h1>
        <div className="flex flex-row">
          <div className="flex flex-row justify-center">
            <p className="mx-2 w-5/6">
              The picture in the top center is a description of the year 2020
              through my eyes. The rest of the works I have done are actually
              religious in nature. They are pamphlets or pictures I used to make
              pamphlets they are all on one Figma page but have only been edited
              using Photoshop. I was unable to upload them as a PSD or PDF to
              this page. These are close up screen shots of the final PhotoShop
              Elements projects I completed.
            </p>
          </div>
        </div>
      <PSZoombox />
      </div>
    </Fragment>
  );
}

export default Photoshop;
