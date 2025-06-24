import React, { useState } from 'react';
import Flashcard from './Flashcard';
import './FlashcardList.css';

// Simple Levenshtein distance function
function levenshteinDistance(a, b) {
  const matrix = [];
  for (let i = 0; i <= b.length; i++) matrix[i] = [i];
  for (let j = 0; j <= a.length; j++) matrix[0][j] = j;
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      matrix[i][j] =
        b[i - 1] === a[j - 1]
          ? matrix[i - 1][j - 1]
          : Math.min(matrix[i - 1][j - 1] + 1, matrix[i][j - 1] + 1, matrix[i - 1][j] + 1);
    }
  }
  return matrix[b.length][a.length];
}

const FlashcardList = ({
  cards,
  masteredCards,
  setMasteredCards,
  resetMastered,
  shuffledCards,
  setShuffledCards,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [feedback, setFeedback] = useState('');

  // Streak states
  const [currentStreak, setCurrentStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);

  const currentCard = cards[currentIndex];

  const handleCheckAnswer = () => {
    if (!currentCard) return;
    const userAnswer = userInput.trim().toLowerCase();
    const correctAnswer = currentCard.answer.trim().toLowerCase();

    let isCorrect = false;

    if (userAnswer === correctAnswer) {
      isCorrect = true;
      setFeedback('🎉 Congrats, you guessed it right!');
    } else if (
      correctAnswer.replace(/\s/g, '') === userAnswer.replace(/\s/g, '') ||
      levenshteinDistance(userAnswer, correctAnswer) <= 2
    ) {
      isCorrect = true;
      setFeedback("✅ Close enough! We'll count it!");
    } else {
      setFeedback('❌ Oops, try again!');
    }

    // Update streaks
    if (isCorrect) {
      setCurrentStreak(prev => {
        const newStreak = prev + 1;
        if (newStreak > longestStreak) setLongestStreak(newStreak);
        return newStreak;
      });
    } else {
      setCurrentStreak(0);
    }
  };

  const markAsMastered = () => {
    const masteredId = currentCard.id;
    setMasteredCards(prev => [...prev, masteredId]);

    setFeedback('');
    setFlipped(false);
    setUserInput('');

    const nextCards = cards.filter(card => card.id !== masteredId);

    if (nextCards.length === 0) return;

    if (currentIndex >= nextCards.length) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToNext = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setFlipped(false);
      setUserInput('');
      setFeedback('');
    }
  };

  const goToPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setFlipped(false);
      setUserInput('');
      setFeedback('');
    }
  };

  const shuffleCards = () => {
    const shuffled = [...cards];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setShuffledCards(shuffled);
    setCurrentIndex(0);
    setFlipped(false);
    setUserInput('');
    setFeedback('');
  };

  if (cards.length === 0) {
    return (
      <div className="flashcard-container">
        <p>🎉 You've mastered all the cards!</p>
        <button onClick={resetMastered}>🔄 Reset Cards</button>
      </div>
    );
  }

  return (
    <div className="flashcard-container">
      <Flashcard card={currentCard} flipped={flipped} setFlipped={setFlipped} />

      <div className="input-group">
        <input
          type="text"
          placeholder="Type your guess here"
          value={userInput}
          onChange={e => setUserInput(e.target.value)}
        />
        <button onClick={handleCheckAnswer}>Submit</button>
      </div>

      {feedback && <p className="feedback">{feedback}</p>}

      {/* Streak Display */}
      <div className="streaks">
        <p>🔥 Current Streak: {currentStreak}</p>
        <p>🏆 Longest Streak: {longestStreak}</p>
      </div>

      <div className="controls">
        <button onClick={goToPrev} disabled={currentIndex === 0}>
          ◀️ Back
        </button>
        <button onClick={goToNext} disabled={currentIndex === cards.length - 1}>
          Next ▶️
        </button>
        <button onClick={markAsMastered}>✅ Mark as Mastered</button>
        <button onClick={shuffleCards}>🔀 Shuffle Cards</button>
        <button onClick={resetMastered}>🔄 Reset</button>
      </div>
    </div>
  );
};

export default FlashcardList;
