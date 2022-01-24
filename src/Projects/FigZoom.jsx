import React, { Fragment } from "react";
import "./Projects.css";
import figproj0 from "./Pictures/rocket.png";
import figproj1 from "./Pictures/palehorse.png";
import figproj2 from "./Pictures/kanjiux.png";
import figproj3 from "./Pictures/kanjiui.png";

const figprojects = [figproj0, figproj1, figproj2, figproj3];

const figdescr = [
  {
    title: "Rocko's Rocket Repair",
    description:
      "This was my first landing page. I wanted it to be original so a fake company was chosen. I chose pictures for backgrounds and found the font from font awesome.",
    challenge:
      "Challenge: ensuring that all the pictures in the slide panel were able to be seen.",
    solution:
      "Solution: I had to create three different frames to show each picture appearing in the panel section.",
  },
  {
    title: "Pale Horse: Satire Writing",
    description:
      "The Pale Horse Project was a mock writing site for free lance writers.  It is my first React with CSS Tailwinds project site so I stuck to the basics.",
    challenge:
      "Challenge: Understanding the React software while designing the UX so it would be engaging.",
    solution:
      "Solution: I had to create a very basic design but added a fun section to make it more interesting.",
  },
  {
    title: "Kanji App UX",
    description:
      "This was a UX design for a Japanese kanji learning app.  It is a work in progress and is yet to be finished.",
    challenge:
      "Challenge: Fitting lots of information onto one screen and still be readable.",
    solution:
      "Solution: I had to use buttons and maximize space by reducing area around the separate fields and buttons.",
  },
  {
    title: "Kanji App UI",
    description:
      "This was an attempt at a UI design for the kanji app.  I normally do all my UI on paper but I gave it a try on figma.",
    challenge:
      "Challenge: Ensuring that all the items were included by not making it a UX project.",
    solution:
      "Solution: I did not concentrate on colors or backgrounds just the flow of the project.",
  },
];

function displayProject(num) {
  for (let i = 0; i <= 3; i++) {
    document.getElementById(`details-figproj${i}`).style.display = "none";
    document.getElementById(`bg-figproj${i}`).style.display = "none";
    document.getElementById(`sm-figproj${i}`).style.borderColor = "black";
  }
  document.getElementById(`bg-figproj${num}`).style.zIndex = "20";
  document.getElementById(`details-figproj${num}`).style.display = "block";
  document.getElementById(`bg-figproj${num}`).style.display = "flex";
  document.getElementById(`sm-figproj${num}`).style.borderColor = "#FFB703";
}

function Figzoom() {
  return (
    <Fragment>
      <div className="flex flex-col lg:flex-row space-between w-screen">
        <div className="text-white lg:pt-10 px-8 lg:px-0 lg:pl-16 flex-col justify-center items-center lg:w-1/3">
          <div id="details-figproj0" className="block">
            <p className="pb-2">{figdescr[0].title}</p>
            <p className="pb-2">{figdescr[0].description}</p>
            <p className="py-2">{figdescr[0].challenge}</p>
            <p className="pt-2">{figdescr[0].solution}</p>
          </div>
          <div id="details-figproj1" className="hidden">
            <p className="pb-2">{figdescr[1].title}</p>
            <p className="pb-2">{figdescr[1].description}</p>
            <p className="py-2">{figdescr[1].challenge}</p>
            <p className="pt-2">{figdescr[1].solution}</p>
          </div>
          <div id="details-figproj2" className="hidden">
            <p className="pb-2">{figdescr[2].title}</p>
            <p className="pb-2">{figdescr[2].description}</p>
            <p className="py-2">{figdescr[2].challenge}</p>
            <p className="pt-2">{figdescr[2].solution}</p>
          </div>
          <div id="details-figproj3" className="hidden">
            <p className="pb-2">{figdescr[3].title}</p>
            <p className="pb-2">{figdescr[3].description}</p>
            <p className="py-2">{figdescr[3].challenge}</p>
            <p className="pt-2">{figdescr[3].solution}</p>
          </div>
        </div>
        <div className="w-full">
          <div className="pt-8 lg:pt-0 flex justify-center">
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
          <div className="pb-15 flex justify-center items-center">
            <div className="bg-[#E5E5E5] flex mx-2 border-8 border-yellow rounded-md w-full sm:w-4/5">
              <img
                src={figprojects[0]}
                alt=""
                id="bg-figproj0"
                className="z-10 w-full"
              />
              <img
                src={figprojects[1]}
                alt=""
                id="bg-figproj1"
                className="hidden relative w-full z-10"
              />
              <img
                src={figprojects[2]}
                alt=""
                id="bg-figproj2"
                className="hidden relative w-full"
              />
              <img
                src={figprojects[3]}
                alt=""
                id="bg-figproj3"
                className="hidden relative w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Figzoom;
