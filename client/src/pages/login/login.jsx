import { GoogleLogin } from "@react-oauth/google";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-full flex flex-col items-center min-h-screen bg-gray-50">
      <div className="w-[90%] md:w-[28%] shadow-xl rounded-lg bg-white p-8 mt-24">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Sign in
        </h2>

        {/* Google Login */}
        <div className="w-full mb-6">
          <GoogleLogin />
        </div>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="px-3 text-gray-500 text-sm">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Form */}
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
              type="text"
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

          {/* Login Button */}
          <button className="bg-blue-700 hover:bg-blue-900 text-white font-semibold text-lg rounded-lg w-full py-3 transition">
            Login
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-6 text-gray-600 text-lg">
        New to LinkedIn?{" "}
        <Link
          to={"/signup"}
          className="text-blue-700 hover:font-semibold transition"
        >
          Join Now
        </Link>
      </div>
    </div>
  );
};

export default Login;
