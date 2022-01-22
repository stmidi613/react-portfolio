import React, { Fragment } from "react";

function Extras() {
  return (
    <Fragment>
        <div className="flex">
          <div className="mr-12">
            <h2 className="mt-2 text-yellow text-md sm:text-3xl mb-4 ml-6">Skills</h2>

            <ol className="text-sm sm:text-xl ml-9">
              <li>• HTML 5</li>
              <li>• CSS3</li>
              <li>• GIT</li>
              <li>• Translation</li>
              <li>• PhotoShop</li>
              <li>• Javascript</li>
              <li>• WordPress</li>
              <li>• React</li>
            </ol>
          </div>
          <div>
            <h2 className="mt-2 text-md sm:text-3xl text-yellow mb-4 m-6">Future Goals</h2>

            <ol className="w-full flex flex-col flex-wrap text-sm sm:text-xl mx-9">
              <li>• TypeScript</li>
              <li>• React Native</li>
              <li>• GraphQL</li>
              <li>• Python</li>
              <li>• MERN Stack</li>
            </ol>
          </div>
        </div>
    </Fragment>
  );
}

export default Extras;
