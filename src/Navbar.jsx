import React from "react";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import logo from "./Pictures/portrait.png";
import { NavLink } from 'react-router-dom';
import './index.css'

const navigation = [
  { name: "Background", href: "/", current: true },
  { name: "Projects", href: "/projects", current: false },
  { name: "Contact", href: "/contact", current: false },
  { name: "Resume", href: "/resumes", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Navbar() {
  return (
    <>
    <Disclosure as="nav" className="bg-darkblue md:fixed w-full z-30">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6 bg-lightblue rounded" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6 bg-lightblue rounded" aria-hidden="true" />
                      )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-10 w-auto"
                    src={logo}
                    alt="Workflow"
                    />
                  <img
                    className="hidden lg:block h-10 w-auto"
                    src={logo}
                    alt="Workflow"
                    />
                  <h3 className="pl-2 text-yellow">Stephen Dilks</h3>
                </div>
                <div className="hidden sm:flex w-full justify-center items-center sm:pl-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <NavLink
                      key={item.name}
                      to={item.href}
                      className="active"
                      className={classNames(
                        item.current
                        ? "text-lightblue hover:text-yellow"
                        : "text-lightblue hover:text-yellow",
                        "px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                        >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <NavLink
                key={item.name}
                to={item.href}
                className={classNames(
                  item.current
                  ? "text-lightblue hover:text-yellow"
                  : "text-lightblue hover:text-yellow",
                  "block px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                  >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  </>
  );
}

export default Navbar;
