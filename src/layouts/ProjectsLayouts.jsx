import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import BreadCrumbs from "../BreadCrumbs";

function ProjectsLayouts() {
  return (
    <div className="h-screen p-3 md:px-[8.5rem] md:py-[1rem] ">
      <nav className="flex justify-start gap-2 sm:gap-5">
        <h1 className="font-bold text-xl md:text-3xl">Projects</h1>
        <NavLink
          className="md:text-2xl hover:bg-[rgb(1,35,255)] hover:text-[rgb(255,255,255)]  ease-out duration-500 rounded-sm p-1"
          to="tonwhouse"
        >
          TownHouse
        </NavLink>
        <NavLink
          className="md:text-2xl hover:bg-[rgb(1,35,255)] hover:text-[rgb(255,255,255)]  ease-out duration-500 rounded-sm p-1"
          to="condominium"
        >
          Condominium
        </NavLink>
      </nav>
      {/* <BreadCrumbs /> */}
      <Outlet />
    </div>
  );
}

export default ProjectsLayouts;
