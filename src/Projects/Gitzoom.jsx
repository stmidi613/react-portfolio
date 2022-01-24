import React, { Fragment } from "react";
import "./Projects.css";
import gitproj0 from "./Pictures/rocketsite.png";
import gitproj1 from "./Pictures/palehorse.png";
import gitproj2 from "./Pictures/password.png";
import gitproj3 from "./Pictures/bingo.png";

const gitprojects = [gitproj0, gitproj1, gitproj2, gitproj3];

const gitdescr = [
  {
    title: "Rocko's Rocket Repair",
    description:
      "This was my first landing page. I wanted it to be original so a fake company was chosen. I chose pictures for backgrounds and found the font from font awesome.",
    challenge:
      "Challenge:  Using only CSS and HTML while creating an engaging landging page.",
    solution:
      "Solution:  I decided to use Bootstrap slideshow and interesting background pictures as well as a CSS hamburger menus popout menu."
  },
  {
    title: "Pale Horse: Satire Writing",
    description:
      "The Pale Horse Project was a mock writing site for free lance writers.  It is my first React with CSS Tailwinds project site so I stuck to the basics.",
    challenge:
      "Challenge: Using Browser Router along with login Authentication.",
    solution:
      "Solution: I had to use hooks to create a Login State and store it in Local Storage.  I added a component to handle the state after before and after Login.  I would use GraphQL or Firebase if it were a real site and not local storage.",
  },
  {
    title: "Password Generator",
    description:
      "This was a vanilla Javascript App to create randomized passwords.",
    challenge:
      "Challenge: Ensuring that the passwords could be used for real websites and not confuse the user.",
    solution:
      "Solution: I created a function to remove any confusing characters like zero and capital O and ensured that special characters were not the first item.  I then made sure that at least one number and special character was present by changing the function slightly.",
  },
  {
    title: "Bingo Card Generator",
    description:
      "The goal was to use vanilla Javascript to create printable bingo cards for children.  It was inspired by some of the classes I taught as an English teacher.",
    challenge:
      "Challenge: Making sure the print function did not cut the cards in the middle but printed every card intact.",
    solution:
      "Solution: I had to first ensure that all the div elements were block style.  Then I used the css '@page' and 'page-break-after: avoid' features to ensure all the cards would be printed properly.",
  },
];

function displayProject(num) {
  num > 1
    ? (document.getElementById("git-widebox").style.display = "none")
    : (document.getElementById("git-widebox").style.display = "flex");
  num < 2
    ? (document.getElementById("git-smallbox").style.display = "none")
    : (document.getElementById("git-smallbox").style.display = "flex");
  for (let i = 0; i <= 3; i++) {
    document.getElementById(`details-gitproj${i}`).style.display = "none";
    document.getElementById(`bg-gitproj${i}`).style.display = "none";
    document.getElementById(`sm-gitproj${i}`).style.borderColor = "black";
  }
  document.getElementById(`bg-gitproj${num}`).style.zIndex = "20";
  document.getElementById(`details-gitproj${num}`).style.display = "block";
  document.getElementById(`bg-gitproj${num}`).style.display = "flex";
  document.getElementById(`sm-gitproj${num}`).style.borderColor = "#FFB703";
}

function Figzoom() {
  return (
    <Fragment>
      <div className="flex flex-col lg:flex-row space-between w-screen">
        <div className="lg:pt-10 px-8 lg:px-0 lg:pl-16 flex-col justify-center items-center lg:w-1/3">
          <div id="details-gitproj0" className="block">
            <p className="pb-2">{gitdescr[0].title}</p>
            <p className="pb-2">{gitdescr[0].description}</p>
            <p className="py-2">{gitdescr[0].challenge}</p>
            <p className="pt-2">{gitdescr[0].solution}</p>
          </div>
          <div id="details-gitproj1" className="hidden">
            <p className="pb-2">{gitdescr[1].title}</p>
            <p className="pb-2">{gitdescr[1].description}</p>
            <p className="py-2">{gitdescr[1].challenge}</p>
            <p className="pt-2">{gitdescr[1].solution}</p>
          </div>
          <div id="details-gitproj2" className="hidden">
            <p className="pb-2">{gitdescr[2].title}</p>
            <p className="pb-2">{gitdescr[2].description}</p>
            <p className="py-2">{gitdescr[2].challenge}</p>
            <p className="pt-2">{gitdescr[2].solution}</p>
          </div>
          <div id="details-gitproj3" className="hidden">
            <p className="pb-2">{gitdescr[3].title}</p>
            <p className="pb-2">{gitdescr[3].description}</p>
            <p className="py-2">{gitdescr[3].challenge}</p>
            <p className="pt-2">{gitdescr[3].solution}</p>
          </div>
        </div>
        <div className="w-full">
          <div className="pt-8 lg:pt-0 flex justify-center">
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
            <div
              id="git-widebox"
              className="bg-[#E5E5E5] flex mx-2 border-8 border-yellow rounded-md w-full sm:w-4/5"
            >
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
                className="hidden relative w-full z-10"
              />
              </div>
              <div
                id="git-smallbox"
                className="bg-[#E5E5E5] relative hidden justify-center mx-2 border-8 border-yellow rounded-md h-[425px] w-[300px]"
              >
                <img
                  src={gitprojects[2]}
                  alt=""
                  id="bg-gitproj2"
                  className="hidden relative w-full"
                />
                <img
                  src={gitprojects[3]}
                  alt=""
                  id="bg-gitproj3"
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
