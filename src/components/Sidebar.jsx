import React from "react";
import Link from "next/link";

const Sidebar = () => {
    return (
        <aside className="bg-gray-800 text-white h-screen w-64 fixed top-0 z-[9999999] left-0 overflow-y-auto">
            <div className="p-4">
                <h1 className="text-2xl font-bold mb-4">My Sidebar</h1>
                <ul>
                    <li className="mb-2">
                        <Link href="/" passHref>
                            <span className="text-white hover:text-blue-500 cursor-pointer">Home</span>
                        </Link>
                    </li>
                    <li className="mb-2">
                        <Link href="/about" passHref>
                            <span className="text-white hover:text-blue-500 cursor-pointer">About</span>
                        </Link>
                    </li>
                    <li className="mb-2">
                        <Link href="/contact" passHref>
                            <span className="text-white hover:text-blue-500 cursor-pointer">Contact</span>
                        </Link>
                    </li>
                    {/* Add more links as needed */}
                </ul>
            </div>

            {/* Additional content */}
            <div className="border-t border-gray-700 mt-4 pt-4">
                <p className="text-sm text-gray-400">Additional Content</p>
                <p className="text-sm text-gray-400">Lorem ipsum dolor sit amet.</p>
                {/* Add more additional content as needed */}
            </div>
        </aside>
    );
};

export default Sidebar;