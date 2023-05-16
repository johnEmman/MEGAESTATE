import React from "react";
import { Link } from "react-router-dom";

function NotFount() {
  return (
    <div className="flex items-center justify-center flex-col h-screen">
      <h2>404</h2>
      <div>NotFount</div>
      <p>
        Go to the{" "}
        <Link className="text-[blue]" to="/">
          Homepage
        </Link>
        .
      </p>
    </div>
  );
}

export default NotFount;
