import React, { Fragment } from "react";
import Photoshop from "./Photoshop";
import Figma from "./Figma";
import Github from "./Github";
import Zoombox from "./Zoombox";

function Projects() {
  return (
    <Fragment>
      <Photoshop />
      <Figma />
      <Github />
    </Fragment>
  );
}

export default Projects;
