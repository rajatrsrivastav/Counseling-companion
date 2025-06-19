"use client";

import { Book, MoveLeft, MoveRight, GraduationCap, MapPin, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Stepper,
  StepperIndicator,
  StepperItem,
  StepperSeparator,
  StepperTrigger,
} from "@/components/ui/stepper";

const quizQuestions = [
  {
    id: 1,
    question: "Which field interests you the most?",
    options: [
      "Engineering & Technology",
      "Medical & Healthcare",
      "Business & Management",
      "Arts & Humanities",
      "Science & Research",
    ],
  },
  {
    id: 2,
    question: "What type of work environment do you prefer?",
    options: [
      "Hands-on technical work",
      "Patient care and interaction",
      "Strategic planning and analysis",
      "Creative and collaborative",
      "Laboratory and research",
    ],
  },
  {
    id: 3,
    question: "Which subjects do you enjoy the most?",
    options: [
      "Mathematics & Physics",
      "Biology & Chemistry",
      "Economics & Statistics",
      "Literature & History",
      "Pure Sciences",
    ],
  },
  {
    id: 4,
    question: "What motivates you in your career choice?",
    options: [
      "Innovation and problem-solving",
      "Helping people and society",
      "Financial success and growth",
      "Self-expression and creativity",
      "Discovery and knowledge",
    ],
  },
  {
    id: 5,
    question: "Which work style suits you best?",
    options: [
      "Team-based projects",
      "One-on-one interactions",
      "Leadership roles",
      "Independent work",
      "Collaborative research",
    ],
  },
];

const collegeRecommendations = {
  "Engineering & Technology": [
    {
      name: "IIT Bombay",
      branch: "Computer Science Engineering",
      cutoff: "JEE Rank 1-100",
    },
    {
      name: "IIT Delhi",
      branch: "Electrical Engineering",
      cutoff: "JEE Rank 100-300",
    },
    {
      name: "NIT Trichy",
      branch: "Mechanical Engineering",
      cutoff: "JEE Rank 1000-2000",
    },
  ],
  "Medical & Healthcare": [
    { name: "AIIMS Delhi", branch: "MBBS", cutoff: "NEET Rank 1-50" },
    { name: "JIPMER", branch: "MBBS", cutoff: "NEET Rank 50-200" },
    { name: "KGMU", branch: "MBBS", cutoff: "NEET Rank 500-1000" },
  ],
  "Business & Management": [
    { name: "IIM Ahmedabad", branch: "MBA", cutoff: "CAT 99+ percentile" },
    { name: "XLRI Jamshedpur", branch: "MBA", cutoff: "XAT 95+ percentile" },
    { name: "FMS Delhi", branch: "MBA", cutoff: "CAT 98+ percentile" },
  ],
  "Arts & Humanities": [
    {
      name: "JNU",
      branch: "English Literature",
      cutoff: "CUET 90+ percentile",
    },
    { name: "DU", branch: "History", cutoff: "CUET 85+ percentile" },
    { name: "BHU", branch: "Philosophy", cutoff: "BHU UET 80+ percentile" },
  ],
  "Science & Research": [
    { name: "IISc Bangalore", branch: "Physics", cutoff: "KVPY/JEE Advanced" },
    { name: "TIFR", branch: "Mathematics", cutoff: "TIFR Entrance" },
    { name: "ISI Kolkata", branch: "Statistics", cutoff: "ISI Admission Test" },
  ],
};

const quiz = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const currentQuestion = quizQuestions[currentStep];
  const [answers, setAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    const newAnswers = [...answers];
    newAnswers[currentStep] = option;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (!selectedOption) return;
    
    const newAnswers = [...answers];
    newAnswers[currentStep] = selectedOption;
    setAnswers(newAnswers);
    
    if (currentStep < quizQuestions.length - 1) {
      setCurrentStep(currentStep + 1);
      setSelectedOption(newAnswers[currentStep + 1] || "");
    } else {
      setShowResults(true);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setSelectedOption(answers[currentStep - 1] || "");
    }
  };

  const handleRestartQuiz = () => {
    setShowResults(false);
    setQuizStarted(false);
    setCurrentStep(0);
    setAnswers([]);
    setSelectedOption("");
  };

  if (showResults) {
    const selectedField = answers[0];
    const recommendedColleges = collegeRecommendations[selectedField] || [];
    
    return (
      <div className="min-h-screen bg-gray-50 px-4 sm:px-8 md:px-16 lg:px-70 py-6 sm:py-10 md:py-15">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-gray-900">Your Career Fit Results</h1>
          
          <div className="mb-8 bg-white rounded-lg border p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">Your Recommended Field</h2>
            <h3 className="text-2xl font-bold text-blue-600 mb-2">
              {selectedField || "Not Available"}
            </h3>
            <p className="text-gray-600">
              Based on your responses, this field aligns best with your interests and preferences.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-6 text-gray-900">Recommended Colleges & Programs</h2>
            
            {recommendedColleges.length > 0 ? (
              <div className="space-y-4">
                {recommendedColleges.map((college, index) => (
                  <div key={index} className="bg-white rounded-lg border p-6 shadow-sm">
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{college.name}</h3>
                    <p className="text-gray-700 mb-2">{college.branch}</p>
                    <p className="text-gray-600">Typical Cutoff: {college.cutoff}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg border p-8 text-center">
                <p className="text-gray-500">No specific recommendations available for this field.</p>
                <p className="text-sm text-gray-400 mt-2">Selected field: {selectedField}</p>
              </div>
            )}
          </div>

          <div className="flex justify-center space-x-4">
            <Button 
              onClick={handleRestartQuiz}
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-white"
            >
              Retake Quiz
            </Button>
            <Button 
              className="bg-black text-white hover:bg-gray-800"
            >
              Save Results to Dashboard
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (!quizStarted) {
    return (
      <div className="px-4 sm:px-8 md:px-16 lg:px-70 py-6 sm:py-10 md:py-15">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-8">
          Career Fit Quiz
        </h1>
        <div className="max-w-3xl">
          <p className="mb-4 sm:mb-6 text-base sm:text-lg text-gray-600">
            Discover your ideal career path by taking our comprehensive career
            fit quiz. Answer questions about your interests, strengths, and
            preferences to get personalized recommendations.
          </p>
          <div className="mb-4 sm:mb-8 rounded-lg border bg-white p-4 sm:p-6 shadow-sm">
            <h2 className="mb-3 sm:mb-4 text-lg sm:text-xl font-bold">
              How It Works
            </h2>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start">
                <div className="mr-3 sm:mr-4 flex h-6 sm:h-8 w-6 sm:w-8 items-center justify-center rounded-full bg-gray-100">
                  <span className="text-sm sm:text-base font-medium">1</span>
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-medium">
                    Answer Questions
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Complete a series of questions about your interests and
                    preferences.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-3 sm:mr-4 flex h-6 sm:h-8 w-6 sm:w-8 items-center justify-center rounded-full bg-gray-100">
                  <span className="text-sm sm:text-base font-medium">2</span>
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-medium">
                    Get Your Profile
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Receive a detailed career fit profile based on your
                    responses.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-3 sm:mr-4 flex h-6 sm:h-8 w-6 sm:w-8 items-center justify-center rounded-full bg-gray-100">
                  <span className="text-sm sm:text-base font-medium">3</span>
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-medium">
                    Explore Recommendations
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600">
                    View personalized college and career recommendations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg border bg-white p-4 sm:p-6 shadow-sm">
            <div className="flex flex-col items-center justify-center text-center py-6 sm:py-10 px-3 sm:px-4">
              <Book className="h-8 sm:h-12 w-8 sm:w-12 text-gray-400 mb-3 sm:mb-4" />
              <h2 className="text-lg sm:text-xl font-semibold">
                Ready to discover your career path?
              </h2>
              <p className="text-sm sm:text-base text-gray-500 mt-2">
                The quiz takes about 10 minutes to complete. Your results will
                be saved to your dashboard.
              </p>
              <Button
                className="mt-4 sm:mt-6 bg-black text-white hover:bg-gray-800 text-xs sm:text-sm"
                onClick={() => setQuizStarted(true)}
              >
                Start Quiz Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (quizStarted) {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-70 py-6 sm:py-10 md:py-15 space-y-7">
      <div className="text-left text-2xl font-bold">
        <h1>Career Fit Quiz</h1>
        <div className="mx-auto max-w-xl space-y-8 text-center">
          <Stepper value={currentStep + 1}>
            {quizQuestions.map((_, index) => (
              <StepperItem
                key={index}
                step={index + 1}
                className="not-last:flex-1"
              >
                <StepperTrigger>
                  <StepperIndicator />
                </StepperTrigger>
                {index < quizQuestions.length - 1 && <StepperSeparator />}
              </StepperItem>
            ))}
          </Stepper>
        </div>
      </div>
      <div className="">
        <div className="pb-6">
          <h2 className="text-lg sm:text-xl font-semibold">
            {currentQuestion.question}
          </h2>
        </div>
        <div className="space-y-4 mt-4">
          {currentQuestion.options.map((option) => (
            <button
              key={option}
              onClick={() => handleOptionSelect(option)}
              className={`w-full text-left p-4 rounded-md border ${
                selectedOption === option
                  ? "bg-blue-100 border-blue-500"
                  : "bg-white border-gray-300"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
      <div className="flex justify-between">
        <Button onClick={handlePrev}>
          <MoveLeft />
          Prev
        </Button>
        <Button onClick={handleNext} disabled={!selectedOption}>
          Next
          <MoveRight />
        </Button>
      </div>
    </div>
  );
};
}

export default quiz;