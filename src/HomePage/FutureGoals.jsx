import React, { Fragment } from 'react';
import future from '../Pictures/future.png'

function FutureGoals() {
    return (
        <Fragment>
      <div className="bg-teal h-[650px] flex flex-row justify-center flex-wrap items-center">
        <img
          src={future}
          alt=""
          className="float-left my-4 sm:w-[66%]"
        />
        <div className="mx-2">
          <h2 className="mt-2 text-3xl md:text-5xl text-yellow mb-4 m-6">Future Goals</h2>

          <ol className="w-full flex flex-col flex-wrap text-2xl md:text-4xl text-yellow ml-9">
            <li>• TypeScript</li>
            <li>• React Native</li>
            <li>• GraphQL</li>
            <li>• Python</li>
            <li>• MERN Stack</li>
          </ol>
        </div>
      </div>
    </Fragment>
    )
}

export default FutureGoals
