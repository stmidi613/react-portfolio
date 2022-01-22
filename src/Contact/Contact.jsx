import React, { Fragment } from "react";

function Contact() {
  return (
    <Fragment>
      <div className="bg-lightblue h-full">
        <form action="" className="flex flex-col justify-center items-center">
          <div>
            <label
              htmlFor="name"
              className="mt-20 block text-sm font-medium"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-64 h-8 px-2 shadow-sm sm:text-sm border-2 rounded-md"
            />
            <label
              htmlFor="email"
              className="mt-10 block text-sm font-medium"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="mt-1 mb-10 focus:ring-indigo-500 focus:border-indigo-500 block w-64 h-8 px-2 shadow-sm sm:text-sm border-2 rounded-md"
            />
            <label
              htmlFor="comment"
              className="border-b-2block text-sm font-medium"
            >
              Comment
            </label>
            <textarea
              type="text"
              name="comment"
              id="comment"
              className="mt-1 mb-10 focus:ring-indigo-500 focus:border-indigo-500 block w-64 sm:w-96 h-48 p-2 shadow-sm sm:text-sm border-2 rounded-md"
            />
            <button
              type="submit"
              className="bg-white border-2 rounded-md px-2 py-1 mb-20 hover:drop-shadow-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
}

export default Contact;
