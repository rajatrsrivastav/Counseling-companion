import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center justify-between px-4 sm:px-8 md:px-16 lg:px-24 py-10 sm:py-15 md:py-20 bg-gradient-to-b from-[#f2f4f7] to-[#e4e7eb] to-[#F472B6] h-100 w-full p-4 sm:p-6 md:p-10 space-y-4 sm:space-y-7">
        <div className="flex flex-col items-center justify-center space-y-4">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-center">
            {" "}
            NEET College
            <br /> Counseling Companion
          </h1>
          <p className="text-base sm:text-lg text-gray-500 text-center">
            Navigate your college admission journey with personalized tools,
            structured insights, and real-time exam guidance.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-5 py-3 sm:py-5 w-full">
            <button
              className="w-full sm:w-auto bg-black text-white rounded p-2 px-3 text-base hover:bg-gray-800 transition duration-300 transition-all duration-300 transform hover:scale-[1.02]"
              style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
            >
              <Link href="/quiz">Take Career Quiz</Link>
            </button>
            <button
              className="w-full sm:w-auto outline-1px outline-solid outline-gray-300 text-base rounded p-2 px-3 hover:bg-gray-100 transition duration-300 transition-all duration-300 transform hover:scale-[1.02]"
              style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
            >
              <Link href="/dashboard">Go to Dashboard</Link>
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="px-4 sm:px-6 md:px-9 py-6 sm:py-8 md:py-10">
          <h1 className="text-2xl sm:text-3xl font-semibold my-6 sm:my-10">
            Explore Our Features
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-4 lg:space-x-10 snap-x">
            <div
              className="w-full md:w-auto outline-solid outline-1px outline-gray-200 rounded-[12px] p-5 shadow-md space-y-2 transition-all duration-300 transform hover:scale-[1.02]"
              style={{ boxShadow: "rgba(153, 153, 160, 0.2) 0px 7px 29px 0px" }}
            >
              <h2 className="text-xl font-semibold ">Academic Quiz</h2>
              <p className="text-base text-gray-500">
                Answer a few questions to find your perfect academic focus
              </p>
              <button className="bg-black text-white rounded py-2 px-4.5 text-sm hover:bg-gray-800 transition duration-300">
                <Link href="/quiz">Take Quiz</Link>
              </button>
            </div>
            <div
              className="w-full md:w-auto outline-solid outline-1px outline-gray-200 rounded-[12px] p-5 shadow-md space-y-2 transition-all duration-300 transform hover:scale-[1.02]"
              style={{ boxShadow: "rgba(153, 153, 160, 0.2) 0px 7px 29px 0px" }}
            >
              <h2 className="text-xl font-semibold">College Predictor</h2>
              <p className="text-base text-gray-500">
                Get tailored college recommendations based on your profile
              </p>
              <button className="bg-black text-white rounded py-2 px-4.5 text-sm hover:bg-gray-800 transition duration-300">
                <Link href="/predictor">Launch Predictor</Link>
              </button>
            </div>
            <div
              className="w-full md:w-auto outline-solid outline-1px outline-gray-200 rounded-[12px] p-5 shadow-md space-y-2 transition-all duration-300 transform hover:scale-[1.02]"
              style={{ boxShadow: "rgba(153, 153, 160, 0.2) 0px 7px 29px 0px" }}
            >
              <h2 className="text-xl font-semibold">AI Counselor</h2>
              <p className="text-base text-gray-500">
                Chat with our AI counselor for personalized advice and support
              </p>
              <button className="bg-black text-white rounded py-2 px-4.5 text-sm hover:bg-gray-800 transition duration-300">
                <Link href="/counselor">Chat with AI</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-6 sm:mb-8 md:mb-12 px-4 sm:px-6 md:px-9 py-6 sm:py-8 md:py-10">
        <h2 className="mb-4 sm:mb-6 md:mb-8 text-xl sm:text-2xl font-bold">
          Student Success Stories
        </h2>
        <div className="overflow-x-auto snap-x snap-mandatory flex gap-4 sm:gap-6 px-2 sm:px-4 -mx-4 sm:-mx-0 pb-4">
          <div
            className="min-w-[280px] sm:min-w-[400px] md:min-w-[600px] snap-center rounded-lg border bg-white p-4 sm:p-6 shadow-sm transition-all duration-300 transform hover:scale-[1.02]"
            style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
          >
            <p className="mb-4 italic text-gray-600">
              The career quiz helped me discover my passion for computer
              science. I am now studying at my dream college!
            </p>
            <div className="flex items-center">
              <div className="mr-4 h-8 sm:h-10 w-8 sm:w-10 rounded-full bg-gray-200 ">
                <Image
                  src="/images/student1.jpeg"
                  alt="Student 1"
                  width={30}
                  height={30}
                  className="rounded-full"
                />
              </div>
              <div>
                <p className="font-medium">Priya S.</p>
                <p className="text-xs sm:text-sm text-gray-500">
                  Professional final Year MBBS Student (Medico)
                </p>
              </div>
            </div>
          </div>
          <div
            className="min-w-[280px] sm:min-w-[400px] md:min-w-[600px] snap-center rounded-lg border bg-white p-4 sm:p-6 shadow-sm transition-all duration-300 transform hover:scale-[1.02]"
            style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
          >
            <p className="mb-4 italic text-gray-600">
              The counseling tool clarified all my doubts about engineering
              branches. I finally chose what truly excites me!
            </p>
            <div className="flex items-center">
              <div className="mr-4 h-8 sm:h-10 w-8 sm:w-10 rounded-full bg-gray-200 flex items-center justify-center">
                <Image
                  src="/images/student3.jpeg"
                  alt="Student 3"
                  width={100}
                  height={100}
                  className="rounded-full"
                />
              </div>
              <div>
                <p className="font-medium">Rohan M.</p>
                <p className="text-xs sm:text-sm text-gray-500">
                  First Year MBBS Student
                </p>
              </div>
            </div>
          </div>
          <div
            className="min-w-[280px] sm:min-w-[400px] md:min-w-[700px] snap-center rounded-lg border bg-white p-4 sm:p-6 shadow-sm transition-all duration-300 transform hover:scale-[1.02]"
            style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
          >
            <p className="mb-4 italic text-gray-600">
              The college predictor was spot on! I got into 3 of the 5 colleges
              it recommended for me.
            </p>
            <div className="flex items-center">
              <div className="mr-4 h-8 sm:h-10 w-8 sm:w-10 rounded-full bg-gray-200">
                <Image
                  src="/images/student2.jpeg"
                  alt="Student 3"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </div>
              <div>
                <p className="font-medium">Rahul M.</p>
                <p className="text-xs sm:text-sm text-gray-500">
                  Aspiring Physician, second Year Medical Student
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-3 sm:py-4 md:py-5">
        <div className="container mx-auto px-4 text-center ">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 md:mb-8">
            Answer a few questions to find your perfect academic focus
          </h2>
          <button
            className="text-base px-4 sm:px-5 bg-black text-white rounded py-2 hover:bg-gray-800 transition duration-300 transition-all duration-300 transform hover:scale-[1.02]"
            style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
          >
            <Link href="/quiz">Take the Academic Quiz</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
