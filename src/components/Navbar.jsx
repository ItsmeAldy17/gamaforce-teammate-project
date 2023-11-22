import React from "react";
import Image from "next/image";
import logo from "@/assets/logo-gamaforce.png";

const Navbar = () => {
  const borderColor = "#233059";
  const backgroundColor = "#233059";
  const borderWidth = "2px"; // Ubah sesuai kebutuhan

  return (
    <nav className="fixed top-0 z-[9999999] w-screen max-h-[80px] flex flex-row items-center justify-between bg-white p-1 pr-4 mb-16">
      {/* Logo */}
      <div className="flex items-center">
        <Image src={logo} alt="Logo" width={250} />
        {/* <span className="text-white ml-2 text-xl font-semibold">Gamaforce</span> */}
      </div>

      {/* Searchbar */}
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search..."
          className="text-black px-4 py-2 rounded-md focus:outline-none"
          style={{ borderColor: borderColor, borderWidth: borderWidth }}
        />
        <button
          className="ml-2 text-white px-4 py-2 rounded-md"
          style={{ backgroundColor: backgroundColor }}
        >
          Search
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
