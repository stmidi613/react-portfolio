import React, { Fragment } from "react";

import FreeJRB from "./Pictures/FreeJRB.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const webappprojects = [FreeJRB];

const webapps = [
  {
    title: "Free Japanese Resume Builder",
    url: "https://www.freejapaneseresumebuilder.com/",
    description:
      "This was my first Web Application.  It was built with ReactJS, Typescript, Tailwinds, HTML, and CSS",
    challenge:
      "Challenge:  Making the site easy to navigate with tips that were easy to understand.  Also making the resume and skill sheet appear professional without errors when printed.  The other problem was state management.",
    solution:
      "Solution:  I used UseContext and UseReducer in several state files throughout the app to manage state.  I also ensured that the skill sheet and resume boxes were flexible enough to adjust to different inputs using css.  I used two buttons",
  },
];

function WebAppZoom() {
  return (
    <Fragment>
      <div className="flex flex-col lg:flex-row space-between w-screen">
        <div className="w-full">
          <div className="pb-10 flex justify-center items-center">
            <a
              href={webapps[0].url}
              id="webapp0"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#E5E5E5] flex mx-2 border-4 border-yellow rounded-md h-[215] sm:h-[425px] w-full sm:w-[650px]"
            >
              <FontAwesomeIcon
                icon={faExternalLinkAlt}
                className="absolute text-yellow z-30"
                viewBox="-40 -40 300 300"
              />
              <img
                src={webappprojects[0]}
                alt=""
                id="bg-webapp0"
                className="z-10 w-full hover:drop-shadow-picshadow"
              />
            </a>
          </div>
        </div>
        <div className="px-8 lg:px-0 lg:pr-16 pb-10 flex flex-col justify-center items-center w-full lg:w-1/3">
          <div id="webappdetails" className="block w-2/3 lg:w-full">
            <p className="text-lg underline pb-2">{webapps[0].title}</p>
            <p className="pb-2">{webapps[0].description}</p>
            <p className="py-2">{webapps[0].challenge}</p>
            <p className="pt-2">{webapps[0].solution}</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default WebAppZoom;
