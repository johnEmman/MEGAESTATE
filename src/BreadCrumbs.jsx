import React from "react";
import { Link, useLocation } from "react-router-dom";

function BreadCrumbs() {
  const location = useLocation();

  let currentLink = "";
  const crumps = location.pathname
    .split("/")
    .filter((crump) => crump !== "")
    .map((crump) => {
      currentLink += `/${crump}`;

      return (
        <div key={crump} className="crumbs">
          <Link to={currentLink}>{crump}</Link>
        </div>
      );
    });
  return <div className="breadcrumbs">{crumps}</div>;
}

export default BreadCrumbs;
