import React from "react";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div className="absolute h-screen w-screen bg-slate-50 text-slate-800 flex flex-col justify-center text-center gap-1">
      <h1 className="text-3xl">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className=" text-slate-600 p-2">
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to={`/`} className="text-blue-600 hover:text-indigo-700">Return to Home</Link>
    </div>
  );
};

export default Error;
