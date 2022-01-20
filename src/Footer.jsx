import React from "react";
import "./index.css";
import phone from "./Pictures/phone.png";
import mail from "./Pictures/mail.png";
import linkedin from "./Pictures/linkedin.png";

function Footer() {
  return (
    <footer className="h-20 sm:h-12 bg-darkblue flex flex-wrap justify-center items-center">
      <div className="flex">
        <img src={phone} alt="" className="float-left w-6" />
        <p className="text-lightblue text-sm ml-2 mr-6 mt-0.5">080-9180-9239</p>
      </div>
      <div className="flex">
        <img src={mail} alt="" className="float-start w-6" />
        <p className="text-lightblue text-sm ml-2 mr-6 mt-0.5">
          dilks_stephen@yahoo.com
        </p>
      </div>
      <div>
        <img src={linkedin} alt="" className="w-6" />
      </div>
    </footer>
  );
}

export default Footer;
