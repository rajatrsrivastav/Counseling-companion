import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send } from "lucide-react"

export default function CounselorChatPage() {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-70 py-6 sm:py-10 md:py-15">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-8">AI Counselor Chat</h1>

      <div className="max-w-3xl">
        <p className="mb-4 sm:mb-6 text-base sm:text-lg text-gray-600">
          Chat with our AI counselor to get personalized guidance on colleges, careers, and the application process.
        </p>

        <div className="rounded-lg border bg-white shadow-sm">
          <div className="border-b p-4">
            <h2 className="font-medium">AI Counselor Chat</h2>
          </div>

          <div className="h-[400px] overflow-y-auto p-4">
            <div className="mb-4 flex justify-start">
              <div className="max-w-[80%] rounded-lg bg-gray-100 p-3">
                <p>
                  Hello! I'm your AI college counselor. How can I help you with your college and career planning today?
                </p>
              </div>
            </div>

            <div className="mb-4 flex justify-end">
              <div className="max-w-[80%] rounded-lg bg-blue-100 p-3">
                <p>I'm interested in computer science but not sure which colleges to apply to.</p>
              </div>
            </div>

            <div className="flex justify-start">
              <div className="max-w-[80%] rounded-lg bg-gray-100 p-3">
                <p>
                  That's a great field! To give you the best college recommendations for computer science, I'll need to
                  know a few things:
                </p>
                <ol className="ml-4 mt-2 list-decimal">
                  <li>What's your approximate exam rank or expected score?</li>
                  <li>Do you have any location preferences?</li>
                  <li>Are you interested in any specific areas within computer science (AI, cybersecurity, etc.)?</li>
                </ol>
              </div>
            </div>
          </div>

          <div className="border-t p-4">
            <div className="flex items-center gap-2">
              <Input placeholder="Type your message..." className="flex-1" />
              <Button size="icon" className="bg-black text-white hover:bg-gray-800">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
