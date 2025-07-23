import React from "react";
import { Link } from "react-router-dom";

const Singup = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="text-4xl mb-5">
        Make the most of your professional life
      </div>
      <div className="w-[85%] md:w-[28%] shadow-xl rounded-sm  box p-10">
        <div className="flex flex-col gap-4">
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="w-full text-xl border-2 rounded-lg px-4 py-1"
              placeholder="abdulwajeed@gmail.com"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="w-full text-xl border-2 rounded-lg px-4 py-1"
              placeholder="Password"
            />
          </div>
          <div>
            <label htmlFor="full-name">Full Name</label>
            <input
              type="text"
              className="w-full text-xl border-2 rounded-lg px-4 py-1"
              placeholder="abdul wajeed"
            />
          </div>
          <div className=" bg-blue-700 text-white w-full text-xl rounded-lg cursor-pointer my-2 px-4 py-2 text-center hover:bg-blue-900 ">
            Register
          </div>
        </div>
        <div className="flex items-center gap-2 ">
          <div className="border-b-1 border-gray-400 w-[45%]" /> <div> or </div>{" "}
          <div className="border-b-1 border-gray-400 w-[45%] my-6" />
        </div>
        <div>Google Oauth</div>
      </div>
      <div className="mt-4 mb-10">
        {" "}
        Already on LinkedIn?{" "}
        <Link to={"/login"} className="text-blue-700 cursor-pointer hover:font-semibold">
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default Singup;
