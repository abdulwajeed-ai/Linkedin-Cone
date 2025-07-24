import { useState } from "react"
import { FaBell, FaBriefcase, FaFonticonsFi, FaHome, FaObjectGroup, FaRegCommentDots, FaUserCircle, FaUsers } from "react-icons/fa";

import "../main-navbar/MainNavbar.css"
const MainNavbar = () => {
const [toggle, setToggle] = useState(false);
  return (
    <div className='h-18 flex bg-gray-200 w-full justify-between md:px-30 px-15 '>
        <div className='flex items-center h-full gap-3'>
            <div>
                <img src="linkedin-logo.png" className='w-10 h-10' alt="" />
            </div>
            <div className="relative" >
                <input className='h-10 w-70 rounded flex items-center px-3 bg-gray-300 searchInput cursor-pointer' type="text" placeholder='Search' />
                {
                    toggle && <div className="absolute w-88 left-0 bg-gray-200">
                    <div className="flex items-center py-2 px-2 gap-3 border-b-1 border-gray-500">
                        <div>
                            <img src="https://media.licdn.com/dms/image/v2/D4E03AQEB_oRlFALtbw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1725088863814?e=1756339200&v=beta&t=TqJpbvZkHsBQf-zq5PPQQr_fk5gn-DxzgMX0S4hjEZw" className="w-10 h-10 rounded-full" alt="" />
                        </div>
                        <div>Abdul Wajeed</div>
                    </div>
                    <div className="flex items-center py-2 px-2 gap-3 border-b-1 border-gray-500">
                        <div>
                            <img src="https://media.licdn.com/dms/image/v2/D4E03AQEB_oRlFALtbw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1725088863814?e=1756339200&v=beta&t=TqJpbvZkHsBQf-zq5PPQQr_fk5gn-DxzgMX0S4hjEZw" className="w-10 h-10 rounded-full" alt="" />
                        </div>
                        <div>Abdul Wajeed</div>
                    </div>
                    <div className="flex items-center py-2 px-2 gap-3 border-b-1 border-gray-500">
                        <div>
                            <img src="https://media.licdn.com/dms/image/v2/D4E03AQEB_oRlFALtbw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1725088863814?e=1756339200&v=beta&t=TqJpbvZkHsBQf-zq5PPQQr_fk5gn-DxzgMX0S4hjEZw" className="w-10 h-10 rounded-full" alt="" />
                        </div>
                        <div>Abdul Wajeed</div>
                    </div>
                </div>
                }
            </div>
        </div>
        <div className="hidden gap-10 md:flex">
            <div className="flex flex-col items-center justify-center cursor-pointer">
                <FaHome className="text-2xl"/>
                <div className="text-sm text-gray-500">Home</div> 
            </div>
            <div className="flex flex-col items-center justify-center cursor-pointer">
                <FaUsers className="text-2xl"/>
                <div className="text-sm text-gray-500">My Network</div> 
            </div>
            <div className="flex flex-col items-center justify-center cursor-pointer">
                <FaBriefcase className="text-2xl"/>
                <div className="text-sm text-gray-500">Resume</div> 
            </div>
            <div className="flex flex-col items-center justify-center cursor-pointer">
                <FaRegCommentDots className="text-2xl"/>
                <div className="text-sm text-gray-500">Message</div> 
            </div>
            <div className="flex flex-col items-center justify-center cursor-pointer">
                <FaBell className="text-2xl"/>
                <div className="text-sm text-gray-500">Notification</div> 
            </div>
            <div className="flex flex-col items-center justify-center cursor-pointer">
                <img src="https://media.licdn.com/dms/image/v2/D4E03AQEB_oRlFALtbw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1725088863814?e=1756339200&v=beta&t=TqJpbvZkHsBQf-zq5PPQQr_fk5gn-DxzgMX0S4hjEZw" className="h-8 w-8 rounded-full" alt="" />
                    <div className="text-sm text-gray-500">Me</div> 
            </div>

        </div>
    </div>
  )
}

export default MainNavbar