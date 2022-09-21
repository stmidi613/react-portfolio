import React, { Fragment } from "react";
import English1 from "./Pictures/English1.png";
import English2 from "./Pictures/English2.png";
import English3 from "./Pictures/English3.png";
import Japanese1 from "./Pictures/Japanese1.png";
import Japanese2 from "./Pictures/Japanese2.png";

import '../index.css'

function Resumes() {
  return (
    <Fragment>
      <main>
        <section className="pt-5">
         <img src={English1} alt="" />
          <img src={English2} alt="" />
          <img src={English3} alt="" />
        </section>
        <section className="pt-5">
          <img src={Japanese1} alt="" />
          <img src={Japanese2} alt="" />
        </section>
      </main>
    </Fragment>
  );
}

export default Resumes;
