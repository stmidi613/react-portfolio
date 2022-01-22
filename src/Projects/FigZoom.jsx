
import React, {Fragment} from 'react';
import "./Projects.css";
import figproj0 from "./Pictures/rocket.png";
import figproj1 from "./Pictures/palehorse.png";
import figproj2 from "./Pictures/kanjiux.png";
import figproj3 from "./Pictures/kanjiui.png";

const figprojects = [figproj0, figproj1, figproj2, figproj3]

function displayProject(num) {
    for(let i=0; i<=3; i++){
    document.getElementById(`bg-figproj${i}`).style.display = "none";
    document.getElementById(`sm-figproj${i}`).style.borderColor = "black";
    }
    document.getElementById(`bg-figproj${num}`).style.zIndex = "20";
    document.getElementById(`bg-figproj${num}`).style.display = "flex";
    document.getElementById(`sm-figproj${num}`).style.borderColor = "#FFB703";
}

function Figzoom() {
  return (
    <Fragment>
      <div>
        <div className="pt-8 flex justify-center">
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
          <div className="bg-[#E5E5E5] flex mx-2 border-8 border-yellow rounded-md h-[425px] w-3/5">
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
              className="hide hidden relative w-full z-10"
            />
            <img
              src={figprojects[2]}
              alt=""
              id="bg-figproj2"
              className="hide hidden relative w-full"
            />
            <img
              src={figprojects[3]}
              alt=""
              id="bg-figproj3"
              className="hide hidden relative w-full"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Figzoom;