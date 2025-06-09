"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  MessageSquare,
  Compass,
  BarChart3,
  ArrowRightIcon,
  BotMessageSquare,
} from "lucide-react";

const page = () => {
  const router = useRouter();

  const handlePreviewClick = () => {
    router.push("/counselor/chat");
  };

  return (
    <div>
      <div className="flex justify-start items-center flex-col bg-gradient-to-b from-[#f2f4f7] to-[#e4e7eb] to-[#F472B6] h-100 w-full p-4 sm:p-6 md:p-10 space-y-4 sm:space-y-5 md:space-y-7">
        <Badge className="bg-gray-400 text-white text-xs sm:text-sm">
          Coming Soon – Free for All
        </Badge>
        <p className="text-3xl sm:text-5xl md:text-7xl mt-2 sm:mt-3 font-bold text-gray-400 text-center">
          AI Counseling Companion <br className="hidden sm:block" />
          for Competitive Exams
        </p>
        <p className="text-sm sm:text-base text-gray-400 text-center mt-3 sm:mt-5 px-4">
          Get personalized college and career guidance based on your exam
          performance,
          <br className="hidden md:block" /> preferences, and aspirations.
        </p>

        <Button
          className="group h-6 text-sm sm:text-base"
          variant="secondary"
          onClick={handlePreviewClick}
        >
          <BotMessageSquare
            className="-ms-1 opacity-60"
            size={16}
            aria-hidden="true"
          />
          Preview
          <ArrowRightIcon
            className="-me-1 opacity-60 transition-transform group-hover:translate-x-0.5"
            size={16}
            aria-hidden="true"
          />
        </Button>
      </div>

      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8">
        <div className="container mx-auto">
          <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            <div
              className="rounded-[12px] bg-white p-4 sm:p-6 transition duration-300 hover:shadow-lg hover:scale-[1.02] transform"
              style={{
                boxShadow: "rgba(100, 100, 111, 0.26) 0px 7px 29px 0px",
              }}
            >
              <div className="mb-3 sm:mb-4">
                <MessageSquare className="h-8 w-8 sm:h-10 sm:w-10 text-gray-500" />
              </div>
              <h3 className="mb-1 sm:mb-2 text-lg sm:text-xl font-semibold text-gray-500">
                Trusted AI Guidance
              </h3>
              <p className="text-sm sm:text-base text-gray-400">
                Get personalized advice from our AI counselor trained on expert
                knowledge.
              </p>
            </div>

            <div
              className="rounded-[12px] bg-white p-4 sm:p-6 transition-all duration-300 transform hover:shadow-lg hover:scale-[1.02]"
              style={{
                boxShadow: "rgba(100, 100, 111, 0.26) 0px 7px 29px 0px",
              }}
            >
              <div className="mb-3 sm:mb-4">
                <Compass className="h-8 w-8 sm:h-10 sm:w-10 text-gray-500" />
              </div>
              <h3 className="mb-1 sm:mb-2 text-lg sm:text-xl font-semibold text-gray-500">
                Exam-to-College Path
              </h3>
              <p className="text-sm sm:text-base text-gray-400">
                Navigate your journey from exam results to college admission
                with confidence.
              </p>
            </div>

            <div
              className="rounded-[12px] bg-white p-4 sm:p-6 transition-all duration-300 transform hover:shadow-lg hover:scale-[1.02]"
              style={{
                boxShadow: "rgba(100, 100, 111, 0.26) 0px 7px 29px 0px",
              }}
            >
              <div className="mb-3 sm:mb-4">
                <BarChart3 className="h-8 w-8 sm:h-10 sm:w-10 text-gray-500" />
              </div>
              <h3 className="mb-1 sm:mb-2 text-lg sm:text-xl font-semibold text-gray-500 ">
                Perfect Match
              </h3>
              <p className="text-sm sm:text-base text-gray-400">
                Find colleges and branches that align with your strengths and
                career goals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;