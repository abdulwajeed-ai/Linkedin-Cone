import { GoogleLogin } from "@react-oauth/google";
import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="w-full flex flex-col items-center min-h-screen bg-gray-50">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mt-12 mb-8 px-4">
        Make the most of your professional life
      </h1>

      {/* Signup Card */}
      <div className="w-[90%] md:w-[28%] shadow-xl rounded-lg bg-white p-8">
        <div className="flex flex-col gap-5">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block mb-1 text-gray-700 font-medium"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="abdulwajeed@gmail.com"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block mb-1 text-gray-700 font-medium"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Password"
            />
          </div>

          {/* Full Name */}
          <div>
            <label
              htmlFor="full-name"
              className="block mb-1 text-gray-700 font-medium"
            >
              Full Name
            </label>
            <input
              type="text"
              id="full-name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Abdul Wajeed"
            />
          </div>

          {/* Register Button */}
          <button className="bg-blue-700 hover:bg-blue-900 text-white font-semibold text-lg rounded-lg w-full py-3 transition">
            Register
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="px-3 text-gray-500 text-sm">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Google Login */}
        <div className="w-full flex justify-center">
          <GoogleLogin />
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-6 text-gray-600 text-lg mb-10">
        Already on LinkedIn?{" "}
        <Link
          to="/login"
          className="text-blue-700 hover:font-semibold transition"
        >
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default Signup;
