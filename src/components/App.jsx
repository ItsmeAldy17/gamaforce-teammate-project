"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "@/assets/logo-gamaforce.png";
import Sidebar from "@/components/Sidebar";

import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/components/Map"), {
  loading: () => (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-white"></div>
    </div>
  ),
  ssr: false,
});

const LoadMisi = dynamic(() => import("@/components/LoadMisi"), {
  loading: () => (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-white"></div>
    </div>
  ),
  ssr: false,
});

const App = ({ missions = "" }) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [loadMission, setLoadMission] = useState(false);
  const [searchMission, setSearchMission] = useState("");
  const borderColor = "#233059";
  const backgroundColor = "#233059";
  const borderWidth = "2px"; // Ubah sesuai kebutuhan

  const handleSearchMission = () => {
    missions.map((mission) => {
      if (mission.name === searchMission) {
        setLoadMission(true);
      }
    });
  };

  const handleKeyDown = (e) => {
    // Menangani ketika tombol "Enter" ditekan
    if (e.key === "Enter") {
      handleSearchMission();
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 z-[9999999] w-screen max-h-[80px] flex flex-row items-center justify-between bg-white p-1 pr-4 mb-16">
        {/* Logo */}
        <div className="flex items-center cursor-pointer">
          <Image
            src={logo}
            alt="Logo"
            width={250}
            laoding="lazy"
            onClick={() => setOpenSidebar((prev) => !prev)}
          />
        </div>

        {/* Searchbar */}
        {!loadMission ? (
          <div className="flex items-center">
            <input
              type="text"
              value={searchMission}
              onChange={(e) => setSearchMission(e.target.value)}
              onKeyDown={handleKeyDown} // Menambahkan event handler untuk keydown
              placeholder="Search..."
              className="text-black px-4 py-2 rounded-md focus:outline-none"
              style={{ borderColor: borderColor, borderWidth: borderWidth }}
            />
            <button
              onClick={handleSearchMission}
              className="ml-2 text-white px-4 py-2 rounded-md"
              style={{ backgroundColor: backgroundColor }}
            >
              Search Mission
            </button>
          </div>
        ) : (
          <button
            onClick={() => {
              setLoadMission(false);
              setSearchMission(""); // Mengosongkan nilai pencarian
            }}
            className="ml-2 text-white px-4 py-2 rounded-md"
            style={{ backgroundColor: backgroundColor }}
          >
            Go Back
          </button>
        )}
      </nav>
      {/* End of Navbar */}

      <aside
        className={`bg-gray-800 text-white h-screen w-64 absolute top-[80px] z-[9999999] left-0 overflow-y-auto ${
          openSidebar
            ? "transform translate-x-0 duration-500 ease-in-out"
            : "transform -translate-x-[100%] duration-500 ease-in-out"
        }`}
      >
        <Sidebar />
      </aside>

      {/* Map */}
      {!loadMission ? (
        <Map missions={missions} />
      ) : (
        <LoadMisi missions={missions} searchMission={searchMission} />
      )}
    </>
  );
};

export default App;
