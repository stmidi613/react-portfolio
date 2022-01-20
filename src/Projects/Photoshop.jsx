import React, { Fragment } from "react";
import "./Projects.css";
import flyer from "./Pictures/flyer.png";
import pic1 from "./Pictures/pic.png";
import pic2 from "./Pictures/pic2.png";
import p1 from "./Pictures/p1.png";
import p2 from "./Pictures/p2.png";
import p3 from "./Pictures/p3.png";

function Photoshop() {
  return (
    <Fragment>
      <div className="h-[825px] bg-teal">
        <h1 className="text-5xl text-yellow text-center p-10">Photoshop</h1>
        <div className="flex flex-row justify-around">
          <div className="flex flex-col justify-around">
            <p className="text-white mx-2 w-[500px]">
              The picture in the top center is a description of the year 2020
              through my eyes. The rest of the works I have done are actually
              religious in nature. They are pamphlets or pictures I used to make
              pamphlets they are all on one Figma page but have only been edited
              using Photoshop. I was unable to upload them as a PSD or PDF to
              this page. These are close up screen shots of the final PhotoShop
              Elements projects I completed.
            </p>
            <div className="flex flex-wrap justify-between w-[500px]">
              <img src={flyer} alt="" className="m-2 w-24 h-32" />
              <img src={pic2} alt="" className="m-2 w-32 h-24" />
              <img src={p1} alt="" className="m-2 w-32 h-24" />
              <img src={pic1} alt="" className="m-2 w-24 h-32" />
              <img src={p2} alt="" className="m-2 w-32 h-24" />
              <img src={p3} alt="" className="m-2 w-32 h-24" />
            </div>
          </div>
          <div>
            <div
              id="zoombox"
              className="bg-[#E5E5E5] flex flex-wrap justify-center items-center mx-2 border-8 border-yellow rounded-md h-[625px] w-[865px]"
            >
              <div className="flex flex-wrap justify-between w-[500px]">
                <img src={flyer} alt="" className="m-2 w-24 h-32" />
                <img src={pic2} alt="" className="m-2 w-32 h-24" />
                <img src={p1} alt="" className="m-2 w-32 h-24" />
              </div>
              <div className="flex flex-wrap justify-between w-[500px]">
                <img src={pic1} alt="" className="m-2 w-24 h-32" />
                <img src={p2} alt="" className="m-2 w-32 h-24" />
                <img src={p3} alt="" className="m-2 w-32 h-24" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Photoshop;
