"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle2, XCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

// Quiz questions about women's welfare and empowerment
const quizQuestions = [
  {
    question: "What percentage of the global population is female?",
    options: ["30%", "49.6%", "60%", "75%"],
    correctAnswer: "49.6%",
    explanation: "Women make up approximately 49.6% of the global population according to recent estimates.",
  },
  {
    question: "Which of the following is a key barrier to women's economic empowerment?",
    options: ["Access to education", "Unpaid care work", "Limited access to financial services", "All of the above"],
    correctAnswer: "All of the above",
    explanation: "All of these factors are significant barriers to women's economic empowerment globally.",
  },
  {
    question: "What is the term for the difference between women's and men's earnings?",
    options: ["Wage disparity", "Income inequality", "Gender pay gap", "Salary difference"],
    correctAnswer: "Gender pay gap",
    explanation: "The gender pay gap refers to the difference between the average earnings of men and women.",
  },
  {
    question: "Which day is recognized as International Women's Day?",
    options: ["March 8", "April 15", "May 1", "December 10"],
    correctAnswer: "March 8",
    explanation: "International Women's Day is celebrated globally on March 8 each year.",
  },
  {
    question: "What percentage of parliamentary seats worldwide are held by women (as of 2023)?",
    options: ["10%", "26%", "38%", "45%"],
    correctAnswer: "26%",
    explanation: "As of 2023, women hold approximately 26% of parliamentary seats worldwide.",
  },
]

export function QuizGame() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [score, setScore] = useState(0)
  const [showExplanation, setShowExplanation] = useState(false)
  const [gameCompleted, setGameCompleted] = useState(false)

  const currentQuestion = quizQuestions[currentQuestionIndex]
  const progress = ((currentQuestionIndex + (showExplanation ? 1 : 0)) / quizQuestions.length) * 100

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option)

    if (option === currentQuestion.correctAnswer) {
      setScore(score + 1)
    }

    setShowExplanation(true)
  }

  const handleNextQuestion = () => {
    setSelectedOption(null)
    setShowExplanation(false)

    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      setGameCompleted(true)
    }
  }

  const resetGame = () => {
    setCurrentQuestionIndex(0)
    setSelectedOption(null)
    setScore(0)
    setShowExplanation(false)
    setGameCompleted(false)
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-xl md:text-2xl text-[#002f86]">Women's Welfare Quiz</CardTitle>
        <CardDescription>Test your knowledge about women's issues and empowerment</CardDescription>
        <Progress value={progress} className="h-2 mt-2" />
      </CardHeader>

      <CardContent>
        <AnimatePresence mode="wait">
          {!gameCompleted ? (
            <motion.div
              key={`question-${currentQuestionIndex}-${showExplanation ? "explanation" : "options"}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-lg md:text-xl font-medium mb-4">
                {currentQuestionIndex + 1}. {currentQuestion.question}
              </h3>

              {!showExplanation ? (
                <div className="space-y-3">
                  {currentQuestion.options.map((option) => (
                    <Button
                      key={option}
                      variant="outline"
                      className="w-full justify-start text-left h-auto py-3 px-4"
                      onClick={() => handleOptionSelect(option)}
                    >
                      {option}
                    </Button>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-gray-50">
                    <div className="flex items-start gap-3">
                      {selectedOption === currentQuestion.correctAnswer ? (
                        <CheckCircle2 className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                      ) : (
                        <XCircle className="h-6 w-6 text-red-500 mt-0.5 flex-shrink-0" />
                      )}
                      <div>
                        <p className="font-medium">
                          {selectedOption === currentQuestion.correctAnswer ? "Correct!" : "Incorrect!"}
                        </p>
                        <p className="text-gray-600 mt-1">{currentQuestion.explanation}</p>
                      </div>
                    </div>
                  </div>

                  <Button onClick={handleNextQuestion} className="w-full bg-[#002f86]">
                    {currentQuestionIndex < quizQuestions.length - 1 ? "Next Question" : "See Results"}
                  </Button>
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-center py-6"
            >
              <div className="mb-6">
                <div className="inline-flex items-center justify-center h-24 w-24 rounded-full bg-[#002f86]/10 mb-4">
                  <span className="text-3xl font-bold text-[#002f86]">
                    {score}/{quizQuestions.length}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">Quiz Completed!</h3>
                <p className="text-gray-600">
                  {score === quizQuestions.length
                    ? "Perfect score! You're a women's welfare expert!"
                    : score >= quizQuestions.length / 2
                      ? "Great job! You know quite a bit about women's welfare issues."
                      : "Thanks for playing! There's always more to learn about women's welfare."}
                </p>
              </div>

              <Button onClick={resetGame} className="bg-[#002f86]">
                Play Again
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>

      <CardFooter className="flex justify-between text-sm text-gray-500 border-t pt-4">
        <div>
          Question {currentQuestionIndex + 1} of {quizQuestions.length}
        </div>
        <div>
          Score: {score}/{gameCompleted ? quizQuestions.length : currentQuestionIndex + (showExplanation ? 1 : 0)}
        </div>
      </CardFooter>
    </Card>
  )
}
