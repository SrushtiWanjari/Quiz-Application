import React from "react";
import { useState } from "react";
import questions from "../config/questions.js";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-lg text-center">
        {showScore ? (
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-3xl font-bold mb-4 text-lime-600">
              Quiz Complete!
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              You scored {score} out of {questions.length}.
            </p>
            <button
              onClick={handleRestartQuiz}
              className="bg-lime-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-lime-600 transition duration-300 mb-4"
            >
              Restart Quiz
            </button>
          </div>
        ) : (
          <div className="flex flex-col">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-2 text-orange-600">
                Question {currentQuestion + 1}/{questions.length}
              </h3>
              <p className="text-lg text-gray-800">
                {questions[currentQuestion].questionText}
              </p>
            </div>
            <div className="flex flex-col space-y-4">
              {questions[currentQuestion].answerOptions.map(
                (answerOption, index) => (
                  <button
                    key={index}
                    onClick={() =>
                      handleAnswerOptionClick(answerOption.isCorrect)
                    }
                    className="bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-full hover:bg-gray-300 transition duration-300 text-left"
                  >
                    {answerOption.answerText}
                  </button>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Quiz;
