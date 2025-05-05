import Link from "next/link";
import React from "react";
import { User } from "lucide-react";

const navbar = () => {
  return (
    <div className=" sticky top-0 z-50 bg-gray-1g00 shadow">
      <div className=" flex items-center justify-between px-10 py-4">
        <div className="text-xl font-bold">
          <Link href="/">RankMate</Link>
        </div>
        <div className="flex justify-between items-center">
          <ul className="flex justify-between items-center space-x-10 px-7 ">
            <li className="hover:text-gray-500">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-gray-500">
              <Link href="/about">About</Link>
            </li>
            <li className="hover:text-gray-500">
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li className="hover:text-gray-500">
              <Link href="/counselor">AI Counselor</Link>
            </li>
          </ul>
        </div>
        <div className="bg-gray-200 rounded-full p-2 flex items-center justify-center">
          <User size={20} className="text-gray-500 hover:text-black" />
        </div>
      </div>
      <div className="bg-gray-200 h-[1px] w-screen"></div>
    </div>
  );
};

export default navbar;
