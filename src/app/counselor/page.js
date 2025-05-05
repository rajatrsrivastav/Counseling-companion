import React from "react";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Compass, BarChart3 } from "lucide-react";
const page = () => {
  return (
    <div>
      <div className="flex justify-start items-center flex-col bg-gradient-to-b from-[#f2f4f7] to-[#e4e7eb] to-[#F472B6] h-100 w-full p-10 space-y-7">
        <Badge className="bg-gray-400 text-white">
          Coming Soon – Free for All
        </Badge>
        <p className="text-7xl mt-3 font-bold text-gray-400 text-center">
          AI Counseling Companion <br />
          for Competitive Exams
        </p>
        <p className="text-gray-400 text-center mt-5">
          Get personalized college and career guidance based on your exam
          performance,
          <br /> preferences, and aspirations.
        </p>
      </div>
      <section className="py-16 px-8">
        <div className="container mx-auto">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-[12px] bg-white p-6 transition duration-300 hover:shadow-lg hover:scale-[1.02] transform " style={{ boxShadow: 'rgba(100, 100, 111, 0.26) 0px 7px 29px 0px' }}>
              <div className="mb-4">
                <MessageSquare className="h-10 w-10 text-gray-500" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-500">
                Trusted AI Guidance
              </h3>
              <p className="text-gray-400">
                Get personalized advice from our AI counselor trained on expert
                knowledge.
              </p>
            </div>

            <div className="rounded-[12px] bg-white p-6 transition-all duration-300 transform hover:shadow-lg hover:scale-[1.02]" style={{ boxShadow: 'rgba(100, 100, 111, 0.26) 0px 7px 29px 0px' }}>
              <div className="mb-4">
                <Compass className="h-10 w-10 text-gray-500" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-500">
                Exam-to-College Path
              </h3>
              <p className="text-gray-400">
                Navigate your journey from exam results to college admission
                with confidence.
              </p>
            </div>

            <div className="rounded-[12px] bg-white p-6 transition-all duration-300 transform hover:shadow-lg hover:scale-[1.02]" style={{ boxShadow: 'rgba(100, 100, 111, 0.26) 0px 7px 29px 0px' }}>
              <div className="mb-4">
                <BarChart3 className="h-10 w-10 text-gray-500" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-500 ">
                Perfect Match
              </h3>
              <p className="text-gray-400">
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
