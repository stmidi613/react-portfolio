import React, {Fragment} from 'react';
import "./Projects.css";
import gitproj0 from "./Pictures/rocketsite.png";
import gitproj1 from "./Pictures/palehorse.png";
import gitproj2 from "./Pictures/password.png";
import gitproj3 from "./Pictures/bingo.png";

const gitprojects = [gitproj0, gitproj1, gitproj2, gitproj3]

function displayProject(num) {
    for(let i=0; i<=3; i++){
    document.getElementById(`bg-gitproj${i}`).style.display = "none";
    document.getElementById(`sm-gitproj${i}`).style.borderColor = "black";
    }
    document.getElementById(`bg-gitproj${num}`).style.zIndex = "20";
    document.getElementById(`bg-gitproj${num}`).style.display = "flex";
    document.getElementById(`sm-gitproj${num}`).style.borderColor = "#FFB703";
}

function Gitzoom() {
  return (
    <Fragment>
      <div>
        <div className="pt-8 flex justify-center">
          <img
            src={gitprojects[0]}
            alt=""
            onMouseOver={() => displayProject(0)}
            id="sm-gitproj0"
            className="w-10 m-2 border-2"
          />
          <img
            src={gitprojects[1]}
            alt=""
            id="sm-gitproj1"
            onMouseOver={() => displayProject(1)}
            className="w-10 m-2 border-2"
          />
          <img
            src={gitprojects[2]}
            alt=""
            id="sm-gitproj2"
            onMouseOver={() => displayProject(2)}
            className="w-10 m-2 border-2"
          />
          <img
            src={gitprojects[3]}
            alt=""
            id="sm-gitproj3"
            onMouseOver={() => displayProject(3)}
            className="w-10 m-2 border-2"
          />
        </div>
        <div className="pb-15 flex justify-center items-center">
          <div className="bg-[#E5E5E5] flex mx-2 border-8 border-yellow rounded-md h-[425px] w-3/5">
            <img
              src={gitprojects[0]}
              alt=""
              id="bg-gitproj0"
              className="z-10 w-full"
            />
            <img
              src={gitprojects[1]}
              alt=""
              id="bg-gitproj1"
              className="hide hidden relative w-full z-10"
            />
            <img
              src={gitprojects[2]}
              alt=""
              id="bg-gitproj2"
              className="hide hidden relative w-full"
            />
            <img
              src={gitprojects[3]}
              alt=""
              id="bg-gitproj3"
              className="hide hidden relative w-full"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Gitzoom;