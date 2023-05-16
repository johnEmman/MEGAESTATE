import React from "react";
import { useParams, useLoaderData } from "react-router-dom";
import data from "./../../data/data.json";

function ProjectDetails() {
  const { id } = useParams();
  const project = useLoaderData();

  return (
    <div className="shadow-xl m-2 sm:m-[4rem] sm:flex rounded-lg">
      <img className="w-[20rem] sm:w-[30rem]" src={`${project.image}`} alt="" />
      <div className="p-2 sm:py-5 ">
        <h1 className="font-bold text-xl sm:text-3xl">{`${project.name}`}</h1>

        <h2 className="sm:text-2xl">{`${project.location} / ${project.price}`}</h2>
        <p className="text-xs sm:text-lg sm:mt-5">{`${project.description}`}</p>
      </div>
    </div>
  );
}

export default ProjectDetails;
