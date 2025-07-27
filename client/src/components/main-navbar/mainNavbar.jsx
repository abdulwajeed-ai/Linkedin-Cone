import { useState } from "react";
import {
  FaBell,
  FaBriefcase,
  FaFonticonsFi,
  FaHome,
  FaObjectGroup,
  FaRegCommentDots,
  FaUserCircle,
  FaUsers,
} from "react-icons/fa";

import "../main-navbar/MainNavbar.css";
const MainNavbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="bg-white h-13 flex justify-between py-1 px-5 xl:px-50 fixed top-0 w-[100%] z-1000">
      <div className="flex gap-2 items-center">

     <div>
           <img src="linkedin-logo.png" className="w-10 h-10" alt="" />
     </div>

        <div className="relative">
          <input
            className="h-10 w-70 rounded flex items-center px-3 bg-gray-300 searchInput cursor-pointer"
            type="text"
            placeholder="Search"
          />
          {toggle && (
            <div className="absolute w-88 left-0 bg-gray-200">
              <div className="flex items-center py-2 px-2 gap-3 border-b-1 border-gray-500">
                <div>
                  <img
                    src="https://media.licdn.com/dms/image/v2/D4E03AQEB_oRlFALtbw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1725088863814?e=1756339200&v=beta&t=TqJpbvZkHsBQf-zq5PPQQr_fk5gn-DxzgMX0S4hjEZw"
                    className="w-10 h-10 rounded-full"
                    alt=""
                  />
                </div>
                <div>Abdul Wajeed</div>
              </div>
              <div className="flex items-center py-2 px-2 gap-3 border-b-1 border-gray-500">
                <div>
                  <img
                    src="https://media.licdn.com/dms/image/v2/D4E03AQEB_oRlFALtbw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1725088863814?e=1756339200&v=beta&t=TqJpbvZkHsBQf-zq5PPQQr_fk5gn-DxzgMX0S4hjEZw"
                    className="w-10 h-10 rounded-full"
                    alt=""
                  />
                </div>
                <div>Abdul Wajeed</div>
              </div>
              <div className="flex items-center py-2 px-2 gap-3 border-b-1 border-gray-500">
                <div>
                  <img
                    src="https://media.licdn.com/dms/image/v2/D4E03AQEB_oRlFALtbw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1725088863814?e=1756339200&v=beta&t=TqJpbvZkHsBQf-zq5PPQQr_fk5gn-DxzgMX0S4hjEZw"
                    className="w-10 h-10 rounded-full"
                    alt=""
                  />
                </div>
                <div>Abdul Wajeed</div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="hidden gap-10  md:flex">
        <div className="flex flex-col items-center justify-center cursor-pointer group ">
          <FaHome className="text-2xl text-gray-500 group-hover:text-black" />
          <div className="text-sm text-gray-500 group-hover:text-black">
            Home
          </div>
        </div>
        <div className="flex flex-col items-center justify-center cursor-pointer group">
          <FaUsers className="text-2xl text-gray-500 group-hover:text-black" />
          <div className="text-sm text-gray-500 group-hover:text-black">
            My Network
          </div>
        </div>
        <div className="flex flex-col items-center justify-center cursor-pointer group">
          <FaBriefcase className="text-2xl text-gray-500 group-hover:text-black" />
          <div className="text-sm text-gray-500 group-hover:text-black">
            Resume
          </div>
        </div>
        <div className="flex flex-col items-center justify-center cursor-pointer group">
          <FaRegCommentDots className="text-2xl text-gray-500 group-hover:text-black" />
          <div className="text-sm text-gray-500 group-hover:text-black">
            Message
          </div>
        </div>
        <div className="flex flex-col items-center justify-center cursor-pointer group">
          <FaBell className="text-2xl text-gray-500 group-hover:text-black" />
          <div className={`text-sm text-gray-500 group-hover:text-black `}>
            Notification
          </div>
        </div>
        <div className="flex flex-col items-center justify-center cursor-pointer">
          <img
            src="https://media.licdn.com/dms/image/v2/D4E03AQEB_oRlFALtbw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1725088863814?e=1756339200&v=beta&t=TqJpbvZkHsBQf-zq5PPQQr_fk5gn-DxzgMX0S4hjEZw"
            className="h-8 w-8 rounded-full"
            alt=""
          />
          <div className={`text-sm text-gray-500`}>Me</div>
        </div>
      </div>
    </div>
  );
};

export default MainNavbar;
