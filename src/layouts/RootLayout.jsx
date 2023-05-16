import React from "react";

import { NavLink, Outlet } from "react-router-dom";
import BreadCrumbs from "../BreadCrumbs";

function RootLayout() {
  return (
    <div>
      <header className="  flex active items-center flex-col  animate__animated animate__backInDown md:flex-row justify-around py-[1rem] bg-[rgb(255,255,255)] border ">
        <div className="text-[rgb(1,35,255)] tracking-wider py-1 px-3 font-bold text-4xl">
          MEGAESTATE
        </div>
        <nav className="flex gap-4 lg:gap-[3rem] px-3">
          <NavLink
            className=" text-[rgb(1,35,255)] md:text-2xl md:py-1 md:mt-0 mt-1 md:px-3 rounded-sm md:w-[6.5rem] text-center  hover:md:bg-[rgb(1,35,255)] hover:md:text-[rgb(255,255,255)] ease-out duration-500 "
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="text-[rgb(1,35,255)] md:text-2xl md:py-1 md:mt-0 mt-1 md:px-3 rounded-sm md:w-[6.5rem] text-center  hover:md:bg-[rgb(1,35,255)] hover:md:text-[rgb(255,255,255)] ease-out duration-500 "
            to="projects"
          >
            Projects
          </NavLink>
          <NavLink
            className="text-[rgb(1,35,255)] md:text-2xl md:py-1 md:mt-0 mt-1 md:px-3 rounded-sm md:w-[6.5rem] text-center  hover:md:bg-[rgb(1,35,255)] hover:md:text-[rgb(255,255,255)] ease-out duration-500 "
            to="about"
          >
            About
          </NavLink>
          <NavLink
            className="text-[rgb(1,35,255)] md:text-2xl md:py-1 md:mt-0 mt-1 md:px-3 rounded-sm md:w-[6.5rem] text-center  hover:md:bg-[rgb(1,35,255)] hover:md:text-[rgb(255,255,255)] ease-out duration-500 "
            to="contact"
          >
            Contact
          </NavLink>
        </nav>
      </header>
      <BreadCrumbs />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
