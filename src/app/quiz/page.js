"use client";

import { MoveLeft, MoveRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Stepper,
  StepperIndicator,
  StepperItem,
  StepperSeparator,
  StepperTrigger,
} from "@/components/ui/stepper";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";

const QuizComponent = () => {
  const [settings, setSettings] = useState({
    amount: 10,
    difficulty: "",
    type: "",
  });
  const [questions, setQuestions] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [quizStarted, setQuizStarted] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleStartQuiz = async () => {
    setLoading(true);
    setError(null);
    const { amount, difficulty, type } = settings;

    try {
      const response = await fetch(
        `/api/quiz?amount=${amount}&difficulty=${difficulty}&type=${type}`
      );
      const data = await response.json();

      if (!response.ok || data.response_code !== 0) {
        throw new Error(data.error || "Could not fetch questions.");
      }

      const formattedQuestions = data.results.map((q) => {
        return {
          ...q,
          options: [...q.incorrect_answers, q.correct_answer],
        };
      });

      setQuestions(formattedQuestions);
      setQuizStarted(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    const newAnswers = [...answers];
    newAnswers[currentStep] = option;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (!selectedOption) return;
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
      setSelectedOption(answers[currentStep + 1] || "");
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
    setQuizStarted(false);
    setShowResults(false);
    setQuestions([]);
    setAnswers([]);
    setCurrentStep(0);
    setError(null);
  };

  const createMarkup = (text) => ({ __html: text });

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <Loader2 className="h-12 w-12 animate-spin text-gray-700" />
        <p className="mt-4 text-lg text-gray-600">Fetching your quiz...</p>
      </div>
    );
  }

  if (showResults) {
    const score = answers.reduce((acc, answer, index) => {
      if (questions[index].correct_answer === answer) {
        return acc + 1;
      }
      return acc;
    }, 0);

    return (
      <div className="min-h-screen bg-gray-50 px-4 py-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">Quiz Results</h1>
          <div className="mb-8 bg-white rounded-lg border p-6 text-center">
            <h2 className="text-xl font-semibold mb-2">Your Score</h2>
            <p className="text-5xl font-bold text-gray-600">
              {score} / {questions.length}
            </p>
          </div>
          <div className="flex justify-center">
            <Button
              onClick={handleRestartQuiz}
              className="bg-black text-white hover:bg-gray-800"
            >
              Take Another Quiz
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (!quizStarted) {
    return (
      <div className="px-4 py-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">Trivia Quiz</h1>
          <div className="rounded-lg border bg-white p-8 shadow-sm space-y-6">
            <h2 className="text-xl font-bold text-center">
              Customize Your Quiz
            </h2>

            {error && (
              <p className="text-center text-red-500 bg-red-100 p-3 rounded-md">
                {error}
              </p>
            )}

            <div className="space-y-2">
              <Label htmlFor="num-questions">Number of Questions:</Label>
              <Input
                id="num-questions"
                type="number"
                min="1"
                max="50"
                value={settings.amount}
                onChange={(e) =>
                  setSettings({ ...settings, amount: e.target.value })
                }
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="difficulty">Select Difficulty:</Label>
              <select
                id="difficulty"
                value={settings.difficulty}
                onChange={(e) =>
                  setSettings({ ...settings, difficulty: e.target.value })
                }
                className="w-full p-2 border rounded-md bg-white"
              >
                <option value="">Any Difficulty</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="type">Select Type:</Label>
              <select
                id="type"
                value={settings.type}
                onChange={(e) =>
                  setSettings({ ...settings, type: e.target.value })
                }
                className="w-full p-2 border rounded-md bg-white"
              >
                <option value="">Any Type</option>
                <option value="multiple">Multiple Choice</option>
                <option value="boolean">True / False</option>
              </select>
            </div>

            <div className="pt-4">
              <Button
                onClick={handleStartQuiz}
                className="w-full bg-black text-white hover:bg-gray-800 text-lg"
              >
                Start Quiz Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentStep];
  return (
    <div className="px-4 py-10 space-y-7">
      <div className="text-left">
        <h1 className="text-2xl font-bold">Trivia Quiz</h1>
        <div className="mx-auto max-w-xl space-y-8 text-center mt-4">
          <Stepper value={currentStep + 1}>
            {questions.map((_, index) => (
              <StepperItem
                key={index}
                step={index + 1}
                className="not-last:flex-1"
              >
                <StepperTrigger>
                  <StepperIndicator />
                </StepperTrigger>
                {index < questions.length - 1 && <StepperSeparator />}
              </StepperItem>
            ))}
          </Stepper>
        </div>
      </div>
      <div>
        <div className="pb-6">
          <h2
            className="text-xl font-semibold"
            dangerouslySetInnerHTML={createMarkup(currentQuestion.question)}
          />
        </div>
        <div className="space-y-4 mt-4">
          {currentQuestion.options.map((option) => (
            <button
              key={option}
              onClick={() => handleOptionSelect(option)}
              className={`w-full text-left p-4 rounded-md border transition-colors ${
                selectedOption === option
                  ? "bg-blue-100 border-blue-500 font-semibold"
                  : "bg-white border-gray-300 hover:bg-gray-50"
              }`}
              dangerouslySetInnerHTML={createMarkup(option)}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-between">
        <Button onClick={handlePrev} disabled={currentStep === 0}>
          <MoveLeft className="mr-2 h-4 w-4" />
          Prev
        </Button>
        <Button onClick={handleNext} disabled={!selectedOption}>
          {currentStep === questions.length - 1 ? "Finish" : "Next"}
          <MoveRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default QuizComponent;
