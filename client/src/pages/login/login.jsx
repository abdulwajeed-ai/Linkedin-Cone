import { Link } from "react-router-dom"

 
const Login = () => {
  return (
    <div className="w-full flex flex-col items-center md:mt-[200px]">
        <div className="w-[85%] md:w-[28%] shadow-xl rounded-sm  box p-10">
      <div className="text-4xl py-4">Sign in </div>
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

          <div className=" bg-blue-700 text-white w-full text-xl rounded-lg cursor-pointer my-2 px-4 py-2 text-center hover:bg-blue-900 ">
            Login
          </div>
        </div>
        </div>
        <div className="text-center my-3">
        {" "}
        New to LinkedIn?{" "}
        <Link to={"/signup"} className="text-blue-700 cursor-pointer hover:font-semibold">
          Join Now
        </Link>
      </div>
    </div>  
  )
}

export default Login