
import React, { useState } from "react";
import { navLinks } from "./utils/NavDB";

function Navbar() {
  const [activeNav, setActiveNav] = useState();
  return (
    <nav className="col-span-2 border-r  min-h-[90vh] w-[80px] xl:w-[250px] pt-8 px-1 flex flex-col items-start justify-between">
    <div className="space-y-8 w-full">
      {navLinks.map((link) => (
        <div
          key={link.id}
          onClick={() => setActiveNav(link.id)}
          className={`w-full flex item-center justify-start space-x-8 px-5 hover:text-gray-800 cursor-pointer text-gray-400  ${
            activeNav === link.id && "text-gray-800"
          }`}
        >
          <span>{link.icon}</span>
          <h1 className="xl:flex hidden">{link.title}</h1>
        </div>
      ))}
    </div>
    <div className="xl:flex flex-col hidden items-center justify-center space-y-2 px-4 py-4 text-gray-900">
      <h1 className="text-xl w-full font-medium">PDF Report </h1>
      <p> Annual Detailed Report</p>
      <button className="w-full py-4 px-3 rounded-full bg-gray-600 text-gray-300">
        Download
      </button>
    </div>
  </nav>
  )
}

export default Navbar


