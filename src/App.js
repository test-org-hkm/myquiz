import React, { useState } from 'react';
import Quiz from './components/Quiz';
import Results from './components/Results';
import './App.css';

function App() {
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleQuizComplete = (finalScore) => {
    setScore(finalScore);
    setShowResults(true);
  };

  const handleRestartQuiz = () => {
    setScore(0);
    setShowResults(false);
  };

  return (
    <div className="App">
      <h1>React Quiz App</h1>
      {!showResults ? (
        <Quiz onComplete={handleQuizComplete} />
      ) : (
        <Results score={score} onRestart={handleRestartQuiz} />
      )}
    </div>
  );
}

export default App; 