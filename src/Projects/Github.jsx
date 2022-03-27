import React, { Fragment } from "react";
import Gitzoom from "./Gitzoom";

function Github() {
  return (
    <Fragment>
      <section aria-labelledby="github-title" className="bg-lightblue">
        <h2 id="github-title" className="allura text-5xl text-yellow text-center p-10">
          Github
        </h2>
        <Gitzoom />
      </section>
    </Fragment>
  );
}

export default Github;
