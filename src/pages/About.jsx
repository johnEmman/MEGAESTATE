import React from "react";

function About() {
  return (
    <div className=" h-[100vh] flex items-center justify-center flex-col">
      <div>
        <h1 className="bg-[rgb(1,35,255)] py-4 px-7 rounded-md font-bold text-[rgb(255,255,255)]">
          Why invest in a Condominium
        </h1>
        <ul className="flex  gap-2 flex-col  p-4">
          <li className="py-2 px-5 bg-slate-200 rounded-sm">
            Experience independent living
          </li>
          <li className="py-2 px-5 bg-slate-200 rounded-sm">
            Live in strategic locations
          </li>
          <li className="py-2 px-5 bg-slate-200 rounded-sm">
            Get maintenance support as needed
          </li>
          <li className="py-2 px-5 bg-slate-200 rounded-sm">
            Avail luxurious amenities without leaving your “home”
          </li>
          <li className="py-2 px-5 bg-slate-200 rounded-sm">
            Find a steady source of passive income
          </li>
          <li className="py-2 px-5 bg-slate-200 rounded-sm">
            Protect the value of your investment
          </li>
          <li className="py-2 px-5 bg-slate-200 rounded-sm">
            Take advantage of flexible payment schemes
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
