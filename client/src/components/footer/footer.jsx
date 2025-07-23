import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-[100%] bg-gray-200 flex justify-center md:absolute bottom-0">
      <div className="md:p-3 w-[100%] flex flex-col items-center py-4">
        <Link to="/" className="flex  items-center cursor-pointer gap-1">
            <h3 className="text-blue-800 font-semibold text-lg">Linked</h3>
            <img src="linkedin-logo.png" className="w-4" alt="" />
        </Link>
        <div className="text-sm">@Copyright 2025</div>
      </div>
    </div>
  );
};

export default Footer;
