import React, { Fragment } from "react";
import proj0 from "./Pictures/pic2.png";
import proj1 from "./Pictures/p2.png";
import proj2 from "./Pictures/p3.png";
import proj3 from "./Pictures/p1.png";
import proj4 from "./Pictures/pic.png";
import proj5 from "./Pictures/flyer.png";
import "./Projects.css";

const projects = [proj0, proj1, proj2, proj3, proj4, proj5];

//This function changes the visibility of the cards and resizes the viewbox window.
function displayProject(num) {
  //This part ensures the viewbox is the right size.
  num > 3
    ? (document.getElementById("widebox").style.display = "none")
    : (document.getElementById("widebox").style.display = "flex");
  num < 4
    ? (document.getElementById("smallbox").style.display = "none")
    : (document.getElementById("smallbox").style.display = "flex");
  //This portion ensures the other projects cannot be seen while hovering on each project.
  for (let i = 0; i <= 5; i++) {
    document.getElementById(`bg-proj${i}`).style.display = "none";
    document.getElementById(`sm-proj${i}`).style.borderColor = "black";
  }
  //This part reveals the right project in the window when hovering on its icon.
  document.getElementById(`bg-proj${num}`).style.zIndex = "20";
  document.getElementById(`bg-proj${num}`).style.display = "flex";
  document.getElementById(`sm-proj${num}`).style.borderColor = "#FFB703";
}

function PSZoombox() {
  return (
    <Fragment>
      <div>
        <div className="pt-8 flex justify-center">
          <img
            src={projects[0]}
            alt=""
            onMouseOver={() => displayProject(0)}
            id="sm-proj0"
            className="w-10 m-2 border-2"
          />
          <img
            src={projects[1]}
            alt=""
            id="sm-proj1"
            onMouseOver={() => displayProject(1)}
            className="w-10 m-2 border-2"
          />
          <img
            src={projects[2]}
            alt=""
            id="sm-proj2"
            onMouseOver={() => displayProject(2)}
            className="w-10 m-2 border-2"
          />
          <img
            src={projects[3]}
            alt=""
            id="sm-proj3"
            onMouseOver={() => displayProject(3)}
            className="w-10 m-2 border-2"
          />
          <img
            src={projects[4]}
            alt=""
            id="sm-proj4"
            onMouseOver={() => displayProject(4)}
            className="w-10 m-2 border-2 proj5"
          />
          <img
            src={projects[5]}
            alt=""
            id="sm-proj5"
            onMouseOver={() => displayProject(5)}
            className="w-10 m-2 border-2 proj6"
          />
        </div>
        <div className="pb-15 flex justify-center items-center">
          <div
            id="widebox"
            className="bg-[#E5E5E5] flex mx-2 border-8 border-yellow rounded-md h-[425px] w-[350px] sm:w-3/5"
          >
            <img
              src={projects[0]}
              alt=""
              id="bg-proj0"
              className="z-10 relative w-full"
            />
            <img
              src={projects[1]}
              alt=""
              id="bg-proj1"
              className="hidden relative w-full"
            />
            <img
              src={projects[2]}
              alt=""
              id="bg-proj2"
              className="hidden relative w-full"
            />
            <img
              src={projects[3]}
              alt=""
              id="bg-proj3"
              className="hidden relative w-full"
            />
          </div>
          <div
            id="smallbox"
            className="bg-[#E5E5E5] relative hidden justify-center mx-2 border-8 border-yellow rounded-md h-[425px] w-[300px]"
          >
            <img
              src={projects[4]}
              alt=""
              id="bg-proj4"
              className="hidden h-full proj5"
            />
            <img
              src={projects[5]}
              alt=""
              id="bg-proj5"
              className="hidden h-full proj6"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default PSZoombox;
