import React from "react";
import "../index.css";
import phone from "../Pictures/phone.png";
import mail from "../Pictures/mail.png";
import linkedin from "../Pictures/linkedin.png";

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
      <div className="flex">
        <a
          href="https://jp.linkedin.com/in/stephen-dilks-a7b68622a?trk=people-guest_people_search-card"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} alt="" className="w-6" />
        </a>
        <p className="text-lightblue text-sm ml-2 mr-6 mt-0.5">Stephen Dilks</p>
      </div>
    </footer>
  );
}

export default Footer;
