"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { GraduationCap } from "lucide-react";

const collegeData = [
  {
    name: "KGMU",
    course: "MBBS",
    location: "Lucknow",
    cutoffRank: 1000,
    fees: "₹80K/year",
  },
  {
    name: "MAMC",
    course: "MBBS",
    location: "Delhi",
    cutoffRank: 1500,
    fees: "₹50K/year",
  },
  {
    name: "Grant Medical College",
    course: "MBBS",
    location: "Mumbai",
    cutoffRank: 2000,
    fees: "₹1.2L/year",
  },
  {
    name: "Kasturba Medical College",
    course: "MBBS",
    location: "Manipal",
    cutoffRank: 3000,
    fees: "₹15L/year",
  },
  {
    name: "JIPMER",
    course: "MBBS",
    location: "Puducherry",
    cutoffRank: 500,
    fees: "₹30K/year",
  },
  {
    name: "AIIMS Delhi",
    course: "MBBS",
    location: "Delhi",
    cutoffRank: 100,
    fees: "₹25K/year",
  },
];

const predictor = () => {
  const [formData, setFormData] = useState({
    rank: "",
    category: "",
    state: "",
    gender: "",
  });
  const [showResults, setShowResults] = useState(false);
  const [predictions, setPredictions] = useState([]);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const predictColleges = () => {
    const userRank = parseInt(formData.rank);
    const filteredColleges = collegeData.filter(
      (college) => userRank <= college.cutoffRank
    );
    setPredictions(filteredColleges);
    setShowResults(true);
  };

  const getCategoryName = (category) => {
    const names = {
      general: "GENERAL",
      obc: "OBC",
      sc: "SC",
      st: "ST",
      ews: "EWS",
    };
    return names[category] || category.toUpperCase();
  };

  if (showResults) {
    return (
      <div className="px-4 sm:px-8 md:px-16 lg:px-70 py-6 sm:py-10 md:py-15">
        <div className="max-w-4xl">
          <div className="mb-6">
            <Button
              onClick={() => setShowResults(false)}
              variant="outline"
              className="mb-4"
            >
              ← Back to Form
            </Button>
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">
              College Prediction Results
            </h1>
            <p className="text-gray-600">
              Based on your NEET rank of {formData.rank}{" "}
              {formData.category &&
                `in ${getCategoryName(formData.category)} category`}
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold mb-4">
              Eligible Colleges ({predictions.length} found)
            </h2>
          </div>

          <div className="space-y-4">
            {predictions.map((college, index) => (
              <div
                key={index}
                className="rounded-lg border bg-white p-6 shadow-sm"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-bold">{college.name}</h3>
                    <p className="text-gray-600">{college.course}</p>
                    <p className="text-gray-600">{college.location}</p>
                  </div>
                </div>

                <div className="flex justify-between text-sm">
                  <span>
                    <strong>Cutoff Rank:</strong> {college.cutoffRank}
                  </span>
                  <span>
                    <strong>Annual Fees:</strong> {college.fees}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {predictions.length === 0 && (
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <GraduationCap className="mb-4 h-16 w-16 text-gray-300" />
                <h3 className="mb-2 text-lg font-medium">No Colleges Found</h3>
                <p className="mb-6 text-base text-gray-500">
                  Based on your current rank, you may need to consider other
                  options or prepare for improvement.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-70 py-6 sm:py-10 md:py-15">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-8">
        NEET College Predictor
      </h1>
      <div className="max-w-3xl">
        <p className="mb-4 sm:mb-6 text-base sm:text-lg text-gray-600">
          Find colleges where you are eligible for admission based on your exam
          rank and category.
        </p>

        <div className="mb-4 sm:mb-8 rounded-lg border bg-white p-4 sm:p-6 shadow-sm">
          <h2 className="mb-3 sm:mb-4 text-lg sm:text-xl font-bold">
            Enter Your Details
          </h2>
          <div className="space-y-3 sm:space-y-4">
            <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="rank"
                  className="mb-1 block text-xs sm:text-sm font-medium"
                >
                  Exam Rank
                </label>
                <Input
                  id="rank"
                  placeholder="Enter your rank"
                  value={formData.rank}
                  onChange={(e) => handleInputChange("rank", e.target.value)}
                  type="number"
                />
              </div>
              <div>
                <label
                  htmlFor="category"
                  className="mb-1 block text-xs sm:text-sm font-medium"
                >
                  Category
                </label>
                <Select
                  onValueChange={(value) =>
                    handleInputChange("category", value)
                  }
                >
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
                <label
                  htmlFor="state"
                  className="mb-1 block text-xs sm:text-sm font-medium"
                >
                  Home State
                </label>
                <Select
                  onValueChange={(value) => handleInputChange("state", value)}
                >
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
                <label
                  htmlFor="gender"
                  className="mb-1 block text-xs sm:text-sm font-medium"
                >
                  Gender
                </label>
                <Select
                  onValueChange={(value) => handleInputChange("gender", value)}
                >
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
            <div className="pt-3 sm:pt-4">
              <Button
                className="bg-black text-white hover:bg-gray-800 text-xs sm:text-sm"
                onClick={predictColleges}
              >
                Predict Colleges
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default predictor;
