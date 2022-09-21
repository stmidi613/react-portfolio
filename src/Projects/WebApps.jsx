import React, { Fragment } from "react";
import WebAppZoom from "./WebAppZoom";

function WebApps() {
  return (
    <Fragment>
      <section aria-labelledby="webapp-title" className="bg-midblue md:pt-10">
        <h2 id="webapp-title" className="allura text-5xl text-gray text-center p-10">
          React Web Apps
        </h2>
        <WebAppZoom />
      </section>
    </Fragment>
  );
}

export default WebApps;
