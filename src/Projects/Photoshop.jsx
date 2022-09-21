import React, { Fragment } from "react";
import PSZoombox from "./PSZoombox";
import '../index.css';

function Photoshop() {
  return (
    <Fragment>
      <section aria-labelledby="ps-title" className="bg-lightblue">
        <h2 id="ps-title" className="allura text-5xl text-yellow text-center p-5 md:p-10">
          Photoshop
        </h2>
        <article className="flex flex-row">
          <div className="flex flex-row justify-center">
            <p className="mx-2 w-1/2">
              All the pictures were completed with Photoshop Elements. The first
              picture was a project I did to describe the year 2020. The other 
              pictures have a religious nature and are made as flyers and pamphlets.
            </p>
          </div>
        </article>
        <PSZoombox />
      </section>
    </Fragment>
  );
}

export default Photoshop;
