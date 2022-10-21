import React, { Fragment } from "react";
import '../index.css';

function Extras() {
  return (
    <Fragment>
        <section aria-labelledby="skills-title goals-title" className="flex wrap">
          <article className="mr-12">
            <h3 id="skills-title" className="allura mt-4 text-yellow text-3xl sm:text-5xl mb-4 sm:ml-6">Skills</h3>

            <ol className="text-sm sm:text-xl sm:ml-9">
              <li>• HTML 5</li>
              <li>• CSS3</li>
              <li>• GIT</li>
              <li>• Typescript</li>
              <li>• PhotoShop</li>
              <li>• Javascript</li>
              <li>• WordPress</li>
              <li>• React</li>
            </ol>
          </article>

          <article>
            <h3 id="goals-title" className="allura mt-4 text-3xl sm:text-5xl text-yellow mb-4 m-6">Future Goals</h3>

            <ol className="w-full flex flex-col flex-wrap text-sm sm:text-xl mx-7">
              <li>• React Native</li>
              <li>• GraphQL</li>
              <li>• Python</li>
              <li>• MERN Stack</li>
            </ol>
          </article>
        </section>
    </Fragment>
  );
}

export default Extras;
