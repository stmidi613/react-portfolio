import React, { Fragment } from "react";
import Gitzoom from "./Gitzoom";

function Github() {
  return (
    <Fragment>
      <div className="h-[825px] bg-lightblue">
        <h1 className="text-3xl sm:text-5xl text-yellow text-center p-10">Github</h1>
        <Gitzoom />
      </div>
    </Fragment>
  );
}

export default Github;
