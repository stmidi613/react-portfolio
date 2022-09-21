import React, { Fragment } from "react";

import WebApps from "./WebApps";
import Photoshop from "./Photoshop";
import Figma from "./Figma";
import Github from "./Github";

function Projects() {
  return (
    <Fragment>
      <WebApps />
      <Github />
      <Figma />
      <Photoshop />
    </Fragment>
  );
}

export default Projects;
