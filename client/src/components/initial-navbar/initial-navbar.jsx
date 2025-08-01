import React from "react";
import { Link } from "react-router-dom";

const InitialNavbar = () => {
  return (
    <nav className="w-[100%] bg-gray-100 md:px-[100px] px-[20px] flex justify-between py-4 box-border">
      <div className="flex justify-between">
        <Link to="/" className="flex items-center gap-1 cursor-pointer">
          <h3 className="text-blue-800 text-3xl font-semibold">Linked</h3>
          <img src="linkedin-logo.png" alt="" className="h-6" />
        </Link>
      </div>
      <div className="flex box-border md:gap-4 gap-2 justify-center items-center">
        <Link to="/signup" className="md:px-4 md:py-2 box-border text-black rounded-3xl text-xl hover:bg-gray-200 cursor-pointer">
          Join now
        </Link>
        <Link to="/login" className="md:px-4 px-3 py-1 md:py-2 box-border text-blue-800 border-1 border-blue-800  rounded-3xl text-xl hover:bg-blue-50 cursor-pointer">
          Sign in
        </Link>
      </div>
    </nav>
  );
};

export default InitialNavbar;
