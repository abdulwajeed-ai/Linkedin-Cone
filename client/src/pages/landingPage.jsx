import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-[80vh] flex flex-col md:flex-row justify-between  items-center px-6 md:px-[120px] py-[50px] bg-gray-100">
      {/* Left Section */}
      <div className="md:w-[40%]">
        <div className="text-4xl font-semibold text-gray-700 mb-6">
          Welcome To Your Professional Community
        </div>

        <div className="my-3 flex mx-auto mt-[20px] bg-white gap-2 rounded-3xl w-[70%] text-black cursor-pointer shadow-md py-3 px-6 justify-center">
          Google Button
        </div>

        <div className="flex mx-auto mt-[20px] py-2 px-2 bg-white gap-2 rounded-3xl items-center w-[70%] justify-center text-black hover:bg-gray-100 border-2 cursor-pointer">
          Sign With Email
        </div>

        <div className="mx-auto mb-4 text-sm w-[70%] mt-6 text-gray-600">
          By clicking Continue to join or sign in, you agree to LinkedIn’s 
          <span className="text-blue-800 cursor-pointer hover:underline"> User Agreement</span>, 
          <span className="text-blue-800 cursor-pointer hover:underline"> Privacy Policy</span>, and 
          <span className="text-blue-800 cursor-pointer hover:underline"> Cookie Policy</span>.
        </div>

        <Link className="mt-4 text-center text-lg" to="/signup">
          New to LinkedIn? <span className="text-blue-800 cursor-pointer hover:underline">Join now</span>
        </Link>
      </div>

      {/* Right Section */}
      <div className="md:w-[50%] h-full">
        <img src="hero-image.jpg" alt="Hero" className="w-full h-full rounded-lg object-cover" />
      </div>
    </div>
  );
};

export default LandingPage;
