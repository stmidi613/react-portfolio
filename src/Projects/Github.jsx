import React, { Fragment } from "react";
import Gitzoom from "./Gitzoom";

function Github() {
  return (
    <Fragment>
      <div className="h-[825px] bg-lightblue">
        <h1 className="text-5xl text-yellow text-center p-10">Github</h1>
        <p className="text-yellow my-10 mx-2 w-[500px]">
          The bingo card, password generator, and rocket repair landing page
          were all completed with vanilla Javascript, HTML, and CSS. The slide
          carousel on the landing page is a bootstrap component. The Pale Horse
          project was my first react project with CSS tailwinds.
        </p>
        <Gitzoom />
      </div>
    </Fragment>
  );
}

export default Github;
