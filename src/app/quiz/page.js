import { Book} from "lucide-react"
import { Button } from "@/components/ui/button";


const quiz = () => {
  return (
    <div className="px-70 py-15">
      <h1 className="text-3xl font-bold mb-8">Career Fit Quiz</h1>
      <div className="max-w-3xl">
    <p className="mb-6 text-lg text-gray-600">
      Discover your ideal career path by taking our comprehensive career fit quiz. Answer questions about your
      interests, strengths, and preferences to get personalized recommendations.
    </p>
    <div className="mb-8 rounded-lg border bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-xl font-bold">How It Works</h2>
      <div className="space-y-4">
        <div className="flex items-start">
          <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
            <span className="font-medium">1</span>
          </div>
          <div>
            <h3 className="font-medium">Answer Questions</h3>
            <p className="text-gray-600">Complete a series of questions about your interests and preferences.</p>
          </div>
        </div>
        <div className="flex items-start">
          <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
            <span className="font-medium">2</span>
          </div>
          <div>
            <h3 className="font-medium">Get Your Profile</h3>
            <p className="text-gray-600">Receive a detailed career fit profile based on your responses.</p>
          </div>
        </div>
        <div className="flex items-start">
          <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
            <span className="font-medium">3</span>
          </div>
          <div>
            <h3 className="font-medium">Explore Recommendations</h3>
            <p className="text-gray-600">View personalized college and career recommendations.</p>
          </div>
        </div>
      </div>
    </div>

    <div className="rounded-lg border bg-white p-6 shadow-sm">
    <div className="flex flex-col items-center justify-center text-center py-10 px-4">
      <Book className="h-12 w-12 text-gray-400 mb-4" />
      <h2 className="text-xl font-semibold">Ready to discover your career path?</h2>
      <p className="text-gray-500 mt-2">
        The quiz takes about 10 minutes to complete. Your results will be saved to your dashboard.
      </p>
      <Button
        className="mt-6 bg-black text-white hover:bg-gray-800"
      >
        Start Quiz Now
      </Button>
    </div>
    </div>
  </div>
</div>
  )
}

export default quiz