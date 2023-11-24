import React from "react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Content</h1>
        <ul className="flex flex-col space-y-4">
          <li className="">
            <Link
              href="https://gamaforce.wg.ugm.ac.id/"
              passHref
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-white hover:text-blue-500 cursor-pointer">
                Home
              </span>
            </Link>
          </li>
          <li className="">
            <Link
              href="https://gamaforce.wg.ugm.ac.id/about-us/"
              passHref
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-white hover:text-blue-500 cursor-pointer">
                About
              </span>
            </Link>
          </li>
          <li className="">
            <Link
              href="https://gamaforce.wg.ugm.ac.id/subteam/"
              passHref
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-white hover:text-blue-500 cursor-pointer">
                SubTeam
              </span>
            </Link>
          </li>
          <li className="">
            <Link
              href="https://gamaforce.wg.ugm.ac.id/achievements/"
              passHref
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-white hover:text-blue-500 cursor-pointer">
                Achievement
              </span>
            </Link>
          </li>
          <li className="">
            <Link
              href="https://gamaforce.wg.ugm.ac.id/gallery/"
              passHref
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-white hover:text-blue-500 cursor-pointer">
                Gallery
              </span>
            </Link>
          </li>
          <li className="">
            <Link
              href="https://gamaforce.wg.ugm.ac.id/category/blog/"
              passHref
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-white hover:text-blue-500 cursor-pointer">
                Blog
              </span>
            </Link>
          </li>
          <li className="">
            <Link
              href="https://gamaforce.wg.ugm.ac.id/contact-us/"
              passHref
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-white hover:text-blue-500 cursor-pointer">
                Contact
              </span>
            </Link>
          </li>
          {/* Add more links as needed */}
        </ul>
      </div>
      {/* Additional content */}
      <div className="border-t border-gray-700 mt-4 pt-4 ">
        <p className="text-sm text-gray-400 p-4">
          Jl. Podocarpus II, Blok D, No. 13 (Rumah Dinas UGM D13), Caturtunggal,
          Sleman, Yogyakarta. 55281
        </p>
        <p className="text-sm text-gray-400 p-4">
          Email: komun.gamaforce@ugm.ac.id
        </p>
        {/* Add more additional content as needed */}
      </div>
    </>
  );
};

export default Sidebar;
