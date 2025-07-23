import React from "react";

const LandingPage = () => {
  return (
    <div className="my-4 py-[50px] md:pl-[120px] px-5 md:flex justify-between">
      <div className="md:w-[40%]">
        <div className="text-4xl mx-auto text-gray-500">
          Welcome To Your Professional Community
        </div>
        <div className="my-3 flex mx-auto mt-[20px] bg-white gap-2 rounded-3xl  w-[70%] text-black cursor-pointer">
          Google Button
        </div>
        <div className="flex mx-auto mt-[20px] py-2 px-2 bg-white gap-2 rounded-3xl items-center w-[70%] justify-center text-black hover:bg-gray-100 border-2 cursor-pointer">
          Sign With Email
        </div>
        <div className="mx-auto mb-4 text-sm w-[70%] mt-6">
          By clicking Continue to join or sign in, you agree to LinkedIn’s <span className="text-blue-700 cursor-pointer hover:underline">User
          Agreement</span>, <span className="text-blue-700 cursor-pointer hover:underline">Privacy Policy</span>, and <span className="text-blue-700 cursor-pointer hover:underline">Cookie Policy</span>.
        </div>
        <div className="mt-4 text-center text-lg">
            New to LinkedIn? <span className="text-blue-700 cursor-pointer hover:underline">Join now</span>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
