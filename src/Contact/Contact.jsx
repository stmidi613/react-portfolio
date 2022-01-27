import React, { Fragment } from "react";
import { useState } from "react";

function Contact() {

  const [formdetails, setFormDetails] = useState({
  name: "",
  email: "",
  message: "",
});

  return (
    <Fragment>
      <div className="bg-lightblue h-full sm:pt-10">
        <form
          action="https://app.99inbound.com/api/e/8lZkZWrS"
          method="POST"
          target="_blank"
          className="flex flex-col justify-center items-center"
        >
          <div style="position: absolute; left: -5000px;">
            <input type="checkbox" name="energetic_cyan_striped_table" value="1" tabIndex="-1" autocomplete="no">
          </div>
          <div>
            <label htmlFor="name" className="mt-20 block text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              id="name"
              value={formdetails.name}
              required
              onChange={(e) => setFormDetails({...formdetails, name: e.target.value})}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-64 h-8 px-2 shadow-sm sm:text-sm border-2 rounded-md"
            />
            <label htmlFor="email" className="mt-10 block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              id="email"
              value={formdetails.email}
              required
              onChange={(e) => setFormDetails({...formdetails, email: e.target.value})}
              className="mt-1 mb-10 focus:ring-indigo-500 focus:border-indigo-500 block w-64 h-8 px-2 shadow-sm sm:text-sm border-2 rounded-md"
            />
            <label
              htmlFor="message"
              className="border-b-2block text-sm font-medium"
            >
              Message
            </label>
            <textarea
              type="text"
              name="message"
              id="message"
              placeholder="Message"
              value={formdetails.message}
              required
              onChange={(e) => setFormDetails({...formdetails, message: e.target.value})}
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
