import React from "react";
import { Download, UserRoundIcon as UserRoundPen, GraduationCap, MessageSquare } from 'lucide-react';
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
const Dashboard = () => {
  return (
    <div className="bg-gray-100">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-4 sm:px-6 md:px-10 py-6 sm:py-10 md:py-15">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-0">Student Dashboard</h1>
        <div className="flex flex-row items-center justify-center space-x-3 sm:space-x-5">
          <button className="outline-solid rounded p-1.5 sm:p-2 px-2 sm:px-3 text-xs sm:text-sm hover:bg-gray-100 transition duration-300 flex items-center space-x-1 sm:space-x-2 bg-white">
            <Download size={16} className="sm:size-20" />
            <Link href="/quiz">Export</Link>
          </button>
          <button className="bg-black text-white rounded p-1.5 sm:p-2 px-2 sm:px-3 text-xs sm:text-sm hover:bg-gray-800 transition duration-300 flex items-center space-x-1 sm:space-x-2">
            <UserRoundPen size={16} className="sm:size-20" />
            <Link href="/quiz">Edit Profile</Link>
          </button>
        </div>
      </div>
      <div className="w-full overflow-x-auto px-2 sm:px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-start space-y-6 md:space-y-0 md:space-x-4 lg:space-x-10 px-2 sm:px-4 md:px-10 py-2 sm:py-3 md:py-5 snap-x snap-mandatory">
          <div
            className="w-full md:min-w-[300px] lg:min-w-[400px] snap-center outline-solid outline-1px outline-gray-200 rounded-[7px] p-4 sm:p-5 shadow-md space-y-2 bg-white transition-all duration-300 transform hover:scale-[1.02]"
            style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
          >
            <h2 className="text-xl sm:text-2xl font-semibold">Quiz Summary</h2>
            <p className="text-sm sm:text-base text-gray-500">Your career fit profile</p>
            <div className="flex flex-col items-center justify-center space-y-2 py-3 sm:py-5 space-y-3 sm:space-y-5 text-center mb-6 sm:mb-10 mt-6 sm:mt-10">
              <p className="text-gray-500 text-sm sm:text-base">
                You haven't taken the Career Fit Quiz yet.
              </p>
              <button className="bg-black text-white rounded py-1.5 sm:py-2 px-3 sm:px-5 text-xs sm:text-sm hover:bg-gray-800 transition duration-300 text-[0.875rem] sm:text-[1rem]">
                <Link href="/quiz">Take Quiz Now</Link>
              </button>
            </div>
          </div>
          <div
            className="w-full md:min-w-[300px] lg:min-w-[400px] snap-center outline-solid outline-1px outline-gray-200 rounded-[7px] p-4 sm:p-5 shadow-md space-y-2 bg-white transition-all duration-300 transform hover:scale-[1.02]"
            style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
          >
            <h2 className="text-xl sm:text-2xl font-semibold">College Predictor</h2>
            <p className="text-sm sm:text-base text-gray-500">
              Find your best college match
            </p>
            <div className="flex flex-col items-center justify-center space-y-2 py-3 sm:py-5 space-y-3 sm:space-y-5 text-center mb-6 sm:mb-10 mt-6 sm:mt-10">
              <GraduationCap className="text-gray-400" size={24} sm:size={30} />
              <button className="bg-black text-white rounded py-1.5 sm:py-2 px-3 sm:px-5 text-xs sm:text-sm hover:bg-gray-800 transition duration-300 text-[0.875rem] sm:text-[1rem]">
                <Link href="/predictor">Launch College Predictor</Link>
              </button>
            </div>
          </div>
          <div
            className="w-full md:min-w-[300px] lg:min-w-[400px] snap-center outline-solid outline-1px outline-gray-200 rounded-[7px] p-4 sm:p-5 shadow-md space-y-2 bg-white transition-all duration-300 transform hover:scale-[1.02]"
            style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
          >
            <h2 className="text-xl sm:text-2xl font-semibold">AI Counselor</h2>
            <p className="text-sm sm:text-base text-gray-500">Get personalized guidance</p>
            <div className="flex flex-col items-center justify-center space-y-2 py-3 sm:py-5 space-y-3 sm:space-y-5 text-center mb-6 sm:mb-10 mt-6 sm:mt-10">
              <MessageSquare className="text-gray-400" size={24} sm:size={30} />
              <button className="bg-black text-white rounded py-1.5 sm:py-2 px-3 sm:px-5 text-xs sm:text-sm hover:bg-gray-800 transition duration-300 text-[0.875rem] sm:text-[1rem]">
                <Link href="/quiz">Open AI Counselor</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 sm:px-6 md:px-10 py-10 sm:py-15 md:py-20 flex items-start">
        <Tabs defaultValue="tab-1" className="items-center w-full">
          <TabsList className="overflow-x-auto flex whitespace-nowrap">
            <TabsTrigger
              value="tab-1"
              style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
              className="text-sm sm:text-base"
            >
              Recommendations
            </TabsTrigger>
            <TabsTrigger
              value="tab-2"
              style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
              className="text-sm sm:text-base"
            >
              {" "}
              Saved Colleges
            </TabsTrigger>
            <TabsTrigger
              value="tab-3"
              style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
              className="text-sm sm:text-base"
            >
              My Notes
            </TabsTrigger>
          </TabsList>
          <TabsContent value="tab-1" className="w-full">
            <h1 className="text-lg sm:text-xl font-bold py-3 sm:py-5">
              Your Branch Recommendations
            </h1>
            <p className="text-muted-foreground p-4 text-center text-xs">
              <div className="flex flex-col items-center justify-center space-x-0 sm:space-x-5 bg-white rounded py-6 sm:py-10 px-3 text-sm flex items-center space-x-0 sm:space-x-2 space-y-3 sm:space-y-5"></div>
            </p>
          </TabsContent>
          <TabsContent value="tab-2" className="w-full py-6 sm:py-10 md:py-15">
            <p className="text-muted-foreground p-4 text-center text-xs">
              <div className="flex flex-col items-center justify-center space-x-0 sm:space-x-5 bg-white rounded py-6 sm:py-10 px-3 text-sm flex items-center space-x-0 sm:space-x-2 space-y-3 sm:space-y-5"></div>
            </p>
          </TabsContent>
          <TabsContent value="tab-3" className="w-full py-6 sm:py-10 md:py-15">
            <p className="text-muted-foreground p-4 text-center text-xs">
              <div className="flex flex-col items-center justify-center space-x-0 sm:space-x-5 bg-white rounded py-6 sm:py-10 px-3 text-sm flex items-center space-x-0 sm:space-x-2 space-y-3 sm:space-y-5"></div>
            </p>
          </TabsContent>
        </Tabs>
      </div>
      <div className="px-4 sm:px-6 md:px-10 py-3 sm:py-4 md:py-5">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-5">Upcoming Events</h1>
        </div>
        <div className="flex flex-col items-center justify-center space-x-0 sm:space-x-5 bg-white rounded py-6 sm:py-10 px-3 text-sm flex items-center space-x-0 sm:space-x-2 space-y-3 sm:space-y-5">
          <p className="text-gray-500 text-sm sm:text-base">
            No upcoming events at the moment.
          </p>
          <p className="text-gray-500 text-sm sm:text-base">
            Check back later for JEE counseling sessions and webinars.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;