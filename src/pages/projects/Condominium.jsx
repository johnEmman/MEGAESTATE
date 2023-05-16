// import projectLoader from "./../../loader/projectLoader";
import { Link, useLoaderData } from "react-router-dom";

function Condominium() {
  const datas = useLoaderData();
  return (
    <div className=" sm:p-[3rem] flex items-center justify-start flex-wrap gap-3 sm:gap-[1rem] ">
      {datas
        .filter((e) => e.category === "condo")
        .map((element, i) => {
          return (
            <Link
              className=" rounded-md shadow-md hover:scale-105 flex items-center justify-between sm:flex-col bg-slate-50  w-[16rem] sm:w-[13rem]"
              to={`/projects/condominium/${element.id}`}
              key={i}
            >
              <img
                className="w-[7.50rem] sm:w-auto"
                src={element.image}
                alt=""
              />
              <div className="text-center">
                <p>{element.name}</p>
                <p>{element.location}</p>
              </div>
            </Link>
          );
        })}
    </div>
  );
}

export default Condominium;
