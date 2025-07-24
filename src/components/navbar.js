"use client"
import Link from "next/link";
import React from "react";
import { User } from "lucide-react";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../app/firebase/firebaseConfig";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const [signOut] = useSignOut(auth);
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut();
      router.push('/auth/login')
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className="sticky top-0 z-50 bg-gray-100 shadow">
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-10 py-4">
        <div className="text-xl font-bold">
          <Link href="/">RankMate</Link>
        </div>
        <div className="hidden md:flex justify-between items-center">
          <ul className="flex justify-between items-center space-x-4 md:space-x-6 lg:space-x-10 px-2 md:px-4 lg:px-7">
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
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="p-2 flex items-center justify-center">
              <User size={22} className="text-gray-500 hover:text-black" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {!user ? (
              <>
                <DropdownMenuLabel>
                  <Link href="/auth/login">Login In</Link>
                </DropdownMenuLabel>
              </>
            ) : (
              <DropdownMenuLabel>
                <button onClick={handleLogout}>Logout</button>
              </DropdownMenuLabel>
            )}
            <DropdownMenuSeparator />
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="bg-gray-200 h-[1px] w-full"></div>
    </div>
  );
};

export default navbar;
