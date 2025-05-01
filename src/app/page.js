import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <>
    <main className="flex flex-col items-center justify-between px-24 py-24">
      <div className="flex flex-col items-center justify-center space-y-4">
        <h1 className="text-5xl font-semibold"> Your College Counseling Companion</h1>
        <p className="text-base text-gray-500">Navigate your college admission journey with personalized tools, structured insights, and real-time exam guidance.</p> 
        <div className="flex flex-row items-center justify-center space-x-5 py-5">
        <button className="bg-black text-white rounded p-2 px-3 text-base hover:bg-gray-800 transition duration-300">
        <Link href="/quiz">Take Career Quiz</Link></button>
        <button className="outline-1px outline-solid outline-gray-300 text-base rounded p-2 px-3 hover:bg-gray-100 transition duration-300">
        <Link href="/dashboard">Go to Dashboard</Link></button>
        </div>
      </div>
    </main>
    <section>
      <div className="px-9 py-10">
        <h1 className="text-3xl font-semibold my-10">Explore Our Features</h1>
        <div className="flex flex-row items-center justify-center space-x-10">
          <div className="outline-solid outline-1px outline-gray-200 rounded p-5 shadow-md space-y-2">
            <h2 className="text-xl font-semibold">Career Quiz</h2>
            <p className="text-base text-gray-500">Find your ideal career path with our personalized quiz</p>
            <button className="bg-black text-white rounded py-2 px-4.5 text-sm hover:bg-gray-800 transition duration-300">
            <Link href="/quiz">Take Quiz</Link></button>
          </div>
          <div className="outline-solid outline-1px outline-gray-200 rounded p-5 shadow-md space-y-2">
            <h2 className="text-xl font-semibold">College Predictor</h2>
            <p className="text-base text-gray-500">Get tailored college recommendations based on your profile</p>
            <button className="bg-black text-white rounded py-2 px-4.5 text-sm hover:bg-gray-800 transition duration-300">
            <Link href="/predictor">Launch Predictor</Link></button>
          </div>
          <div className="outline-solid outline-1px outline-gray-200 rounded p-5 shadow-md space-y-2">
            <h2 className="text-xl font-semibold">AI Counselor</h2>
            <p className="text-base text-gray-500">Chat with our AI counselor for personalized advice and support</p>
            <button className="bg-black text-white rounded py-2 px-4.5 text-sm hover:bg-gray-800 transition duration-300">
            <Link href="/counselor">Chat with AI</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
    <section className="mb-12 px-9 py-10">
        <h2 className="mb-8 text-2xl font-bold">Student Success Stories</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border bg-white p-6 shadow-sm">
            <p className="mb-4 italic text-gray-600">
              "The career quiz helped me discover my passion for computer science. I'm now studying at my dream
              college!"
            </p>
            <div className="flex items-center">
              <div className="mr-4 h-10 w-10 rounded-full bg-gray-200">
                <Image src="/images/student1.jpeg" alt="Student 1" width={30} height={30} className="rounded-full" />
              </div>
              <div>
                <p className="font-medium">Priya S.</p>
                <p className="text-sm text-gray-500">Computer Science Student</p>
              </div>
            </div>
          </div>
          <div className="rounded-lg border bg-white p-6 shadow-sm">
            <p className="mb-4 italic text-gray-600">
              "The college predictor was spot on! I got into 3 of the 5 colleges it recommended for me."
            </p>
            <div className="flex items-center">
              <div className="mr-4 h-10 w-10 rounded-full bg-gray-200">
                <Image src="/images/student2.jpeg" alt="Student 2" width={40} height={40} className="rounded-full" />
              </div>
              <div>
                <p className="font-medium">Rahul M.</p>
                <p className="text-sm text-gray-500">Engineering Student</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
          <div className="container mx-auto px-4 text-center ">
            <h2 className="text-3xl font-bold mb-8">Ready to Find Your Perfect College?</h2>
            <button className="text-base px-5 bg-black text-white rounded py-2 hover:bg-gray-800 transition duration-300">
              <Link href="/quiz">Take the Career Fit Quiz</Link>
            </button>
          </div>
        </section>
    </>
  );
}
