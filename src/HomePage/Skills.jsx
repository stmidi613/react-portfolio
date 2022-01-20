import React, { Fragment } from "react";
import skills from "../Pictures/skills.png";

function Skills() {
  return (
    <Fragment>
      <div className="bg-lightblue h-[650px] flex flex-col sm:flex-row items-center">
        <div className="mx-12">
          <h2 className="mt-2 text-3xl md:text-5xl text-gold mb-4 ml-6">Skills</h2>

          <ol className="text-2xl md:text-4xl text-gold ml-9">
            <li>• HTML 5</li>
            <li>• CSS3</li>
            <li>• GIT</li>
            <li>• Translation</li>
            <li>• Photoshop</li>
            <li>• Javascript</li>
            <li>• WordPress</li>
            <li>• React</li>
            <li>• Microsoft Word</li>
          </ol>
        </div>
        <img
          src={skills}
          alt=""
          className="float-right my-4 mr-10 w-[66%]"
        />
      </div>
    </Fragment>
  );
}

export default Skills;
