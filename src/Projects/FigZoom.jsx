import React, { Fragment } from "react";
import figproj0 from "./Pictures/rocketweb.png";
import figproj1 from "./Pictures/phweb.png";
import figproj2 from "./Pictures/kanjiapp.png";
import figproj3 from "./Pictures/yahooclone.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const figprojects = [figproj0, figproj1, figproj2, figproj3];

const figdescr = [
  {
    title: "Rocko's Rocket Repair Landing Page",
    url: "https://www.figma.com/file/tZSKLWCM6vkaenP7fg1L2f/Rocko's-Rocket-Repair-Exp?node-id=0%3A1",
    description:
      "This was my first landing page. I wanted it to be original so a fake company was chosen. I chose pictures for backgrounds and found the font from font awesome.",
    challenge:
      "Challenge: ensuring that all the pictures in the slide panel were able to be seen.",
    solution:
      "Solution: I had to create three different frames to show each picture appearing in the panel section.",
  },
  {
    title: "Pale Horse: Satire Writing",
    url: "https://www.figma.com/file/5hSWMX0KUyPpyJyMs63rXt/Pale-Horse-Project",
    description:
      "The Pale Horse Project was a mock writing site for free lance writers.  It is my first React with CSS Tailwinds project site so I stuck to the basics.",
    challenge:
      "Challenge: Understanding the React software while designing the UX so it would be engaging.",
    solution:
      "Solution: I had to create a very basic design but added a fun section to make it more interesting.",
  },
  {
    title: "Kanji App UX",
    url: "https://www.figma.com/file/V9Mlr39InKdPlI6Fb1Ab5P/Kanji-app?node-id=0%3A1",
    description:
      "This was a UX design for a Japanese kanji learning app.  It is a work in progress and is yet to be finished.",
    challenge:
      "Challenge: Fitting lots of information onto one screen and still be readable.",
    solution:
      "Solution: I had to use buttons and maximize space by reducing area around the separate fields and buttons.",
  },
  {
    title: "Yahoo Clone",
    url: "https://www.figma.com/file/4rvGXO6Y6FQtyKby1AqAn0/YahooClone?node-id=0%3A1",
    description:
      "I cloned the Yahoo home page and its features.",
    challenge:
      "Challenge: Making sure everything was either pixel perfect or close to it.",
    solution:
      "Solution: I had to use my FireFox web tools to make sure all the colors and proportions matched.",
  },
];

function displayProject(num) {
  for (let i = 0; i <= 3; i++) {
    document.getElementById(`details-figproj${i}`).style.display = "none";
    document.getElementById(`bg-figproj${i}`).style.display = "none";
    document.getElementById(`bg-figprojlink${i}`).style.display = "none";
    document.getElementById(`sm-figproj${i}`).style.borderColor = "black";
  }
  document.getElementById(`bg-figproj${num}`).style.zIndex = "20";
  document.getElementById(`details-figproj${num}`).style.display = "block";
  document.getElementById(`bg-figproj${num}`).style.display = "flex";
  document.getElementById(`bg-figprojlink${num}`).style.display = "flex";
  document.getElementById(`sm-figproj${num}`).style.borderColor = "#FFB703";
}

function Figzoom() {
  return (
    <Fragment>
      <div className="flex flex-col lg:flex-row space-between w-screen">
        <div className="w-full">
          <p className="flex justify-center">
            Click on the large pictures to visit each site.
          </p>
          <div className="flex justify-center">
            <img
              src={figprojects[0]}
              alt=""
              onMouseOver={() => displayProject(0)}
              id="sm-figproj0"
              className="w-10 m-2 border-2"
            />
            <img
              src={figprojects[1]}
              alt=""
              id="sm-figproj1"
              onMouseOver={() => displayProject(1)}
              className="w-10 m-2 border-2"
            />
            <img
              src={figprojects[2]}
              alt=""
              id="sm-figproj2"
              onMouseOver={() => displayProject(2)}
              className="w-10 m-2 border-2"
            />
            <img
              src={figprojects[3]}
              alt=""
              id="sm-figproj3"
              onMouseOver={() => displayProject(3)}
              className="w-10 m-2 border-2"
            />
          </div>
          <div className="pb-10 flex justify-center items-center">
            <a
              href={figdescr[0].url}
              id="bg-figprojlink0"
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
                src={figprojects[0]}
                alt=""
                id="bg-figproj0"
                className="z-10 w-full hover:drop-shadow-picshadow"
              />
            </a>
            <a
              href={figdescr[1].url}
              id="bg-figprojlink1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#E5E5E5] hidden mx-2 border-4 border-yellow rounded-md h-[215] sm:h-[425px] w-full sm:w-[650px]"
            >
              <FontAwesomeIcon
                icon={faExternalLinkAlt}
                className="absolute text-yellow z-30"
                viewBox="-40 -40 300 300"
              />
              <img
                src={figprojects[1]}
                alt=""
                id="bg-figproj1"
                className="hidden relative w-full z-10 hover:drop-shadow-picshadow"
              />
            </a>
            <a
              href={figdescr[2].url}
              id="bg-figprojlink2"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#E5E5E5] hidden mx-2 border-4 border-yellow rounded-md h-[215] sm:h-[425px] w-full sm:w-[650px]"
            >
              <FontAwesomeIcon
                icon={faExternalLinkAlt}
                className="absolute text-yellow z-30"
                viewBox="-40 -40 300 300"
              />
              <img
                src={figprojects[2]}
                alt=""
                id="bg-figproj2"
                className="hidden relative w-full hover:drop-shadow-picshadow"
              />
            </a>
            <a
              href={figdescr[3].url}
              id="bg-figprojlink3"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#E5E5E5] hidden mx-2 border-4 border-yellow rounded-md h-[215] sm:h-[425px] w-full sm:w-[650px]"
            >
              <FontAwesomeIcon
                icon={faExternalLinkAlt}
                className="absolute text-yellow z-30"
                viewBox="-40 -40 300 300"
              />
              <img
                src={figprojects[3]}
                alt=""
                id="bg-figproj3"
                className="hidden relative w-full hover:drop-shadow-picshadow"
              />
            </a>
          </div>
        </div>
        <div className="px-8 lg:px-0 lg:pr-16 pb-10 flex flex-col justify-center items-center w-full lg:w-1/3">
          <div id="details-figproj0" className="block w-2/3 lg:w-full">
            <p className="text-lg underline pb-2">{figdescr[0].title}</p>
            <p className="pb-2">{figdescr[0].description}</p>
            <p className="py-2">{figdescr[0].challenge}</p>
            <p className="pt-2">{figdescr[0].solution}</p>
          </div>
          <div id="details-figproj1" className="hidden w-2/3 lg:w-full">
            <p className="text-lg underline pb-2">{figdescr[1].title}</p>
            <p className="pb-2">{figdescr[1].description}</p>
            <p className="py-2">{figdescr[1].challenge}</p>
            <p className="pt-2">{figdescr[1].solution}</p>
          </div>
          <div id="details-figproj2" className="hidden w-2/3 lg:w-full">
            <p className="text-lg underline pb-2">{figdescr[2].title}</p>
            <p className="pb-2">{figdescr[2].description}</p>
            <p className="py-2">{figdescr[2].challenge}</p>
            <p className="pt-2">{figdescr[2].solution}</p>
          </div>
          <div id="details-figproj3" className="hidden w-2/3 lg:w-full">
            <p className="text-lg underline pb-2">{figdescr[3].title}</p>
            <p className="pb-2">{figdescr[3].description}</p>
            <p className="py-2">{figdescr[3].challenge}</p>
            <p className="pt-2">{figdescr[3].solution}</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Figzoom;
