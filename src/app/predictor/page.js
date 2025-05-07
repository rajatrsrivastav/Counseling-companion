import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { GraduationCap } from "lucide-react"

export default function PredictorPage() {
  return (
    <div className="px-70 py-15">
      <h1 className="text-3xl font-bold mb-8">College Predictor</h1>
      <div className="max-w-3xl">
        <p className="mb-6 text-lg text-gray-600">
          Find colleges where you have a good chance of admission based on your exam rank, category, and preferences.
        </p>

        <div className="mb-8 rounded-lg border bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-bold">Enter Your Details</h2>
          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="rank" className="mb-1 block text-sm font-medium">
                  Exam Rank
                </label>
                <Input id="rank" placeholder="Enter your rank" />
              </div>
              <div>
                <label htmlFor="category" className="mb-1 block text-sm font-medium">
                  Category
                </label>
                <Select>
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General</SelectItem>
                    <SelectItem value="obc">OBC</SelectItem>
                    <SelectItem value="sc">SC</SelectItem>
                    <SelectItem value="st">ST</SelectItem>
                    <SelectItem value="ews">EWS</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label htmlFor="state" className="mb-1 block text-sm font-medium">
                  Home State
                </label>
                <Select>
                  <SelectTrigger id="state">
                    <SelectValue placeholder="Select state" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="delhi">Delhi</SelectItem>
                    <SelectItem value="maharashtra">Maharashtra</SelectItem>
                    <SelectItem value="karnataka">Karnataka</SelectItem>
                    <SelectItem value="tamilnadu">Tamil Nadu</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label htmlFor="gender" className="mb-1 block text-sm font-medium">
                  Gender
                </label>
                <Select>
                  <SelectTrigger id="gender">
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="pt-4">
              <Button className="bg-black text-white hover:bg-gray-800">Predict Colleges</Button>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <GraduationCap className="mb-4 h-16 w-16 text-gray-300" />
            <h3 className="mb-2 text-lg font-medium">No Predictions Yet</h3>
            <p className="mb-6 text-gray-500">
              Enter your details above to see college predictions based on your profile.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
