import React from "react";
import { FaBell, FaInbox, FaDragon, FaSearch, FaUserCircle } from "react-icons/fa";

function Header() {
  return (
    <div className="bg-[#F0F5F5] w-full py-6 items-center justify-start flex px-12">
    {/* Logo */}
    <div className="item-center flex w-full">
      <div className="flex space-x-4 cursor-pointer">
      <FaDragon className="w-6 h-6 color-red" />
      <h1 className="text-xl text-gray-700 font-medium"> Nexturn</h1>
      </div>
    </div>
    {/* Search bar */}
    <div className="w-full lg:flex hidden space-x-4 items-center py-2 justify-start">
      <FaSearch className=""/>
      <input
        type="text"
        placeholder="Search"
        className="bg-transparent outline-none border-none"
      />
    </div>
    {/* Login Icons */}
    <div className="item-center justify-center flex space-x-4">
      <FaBell className="header-icons" />
      <FaInbox className="header-icons" />
      <FaUserCircle className="header-icons" />
    </div>
  </div>
  )
}

export default Header

