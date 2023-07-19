import React, { useState } from 'react';
import QuizContainer from './comp/Quiz';
import ResultContainer from './comp/Result';
import './App.css';
import questions from './qst-data/questions';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption('');
    } else {
      setShowResult(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption('');
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="app">
      {!showResult ? (
        <QuizContainer
          currentQuestion={currentQuestion}
          questions={questions}
          selectedOption={selectedOption}
          handleOptionSelect={handleOptionSelect}
          handleNextQuestion={handleNextQuestion}
        />
      ) : (
        <ResultContainer
          score={score}
          totalQuestions={questions.length}
          handleRestartQuiz={handleRestartQuiz}
        />
      )}
    </div>
  );
}

export default App;
