// src/components/FlashcardList.jsx
import React, { useState } from 'react';
import Flashcard from './Flashcard';
import stringSimilarity from 'string-similarity';
import './FlashcardList.css'; // ✅ Import CSS here

const FlashcardList = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(() => Math.floor(Math.random() * cards.length));
  const [flipped, setFlipped] = useState(false);
  const [userGuess, setUserGuess] = useState('');
  const [feedback, setFeedback] = useState('');
  const [showModal, setShowModal] = useState(false);

  const normalize = (text) => text.toLowerCase().replace(/\s+/g, '').trim();

  const checkGuess = () => {
    const guess = normalize(userGuess);
    const answer = normalize(cards[currentIndex].answer);

    if (guess === answer) {
      setFeedback('🎉 Congrats, you have guessed the cartoon character name!!!');
    } else {
      const similarity = stringSimilarity.compareTwoStrings(guess, answer);
      if (similarity > 0.7) {
        setFeedback('😮 Waoo, you almost got it, it was close, please try again!!!');
      } else {
        setFeedback('❌ Upps, your guess was not correct, please try again!!!');
      }
    }

    setShowModal(true);
    setUserGuess('');
  };

  const nextCard = () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * cards.length);
    } while (newIndex === currentIndex);

    setCurrentIndex(newIndex);
    setFlipped(false);
    setFeedback('');
    setShowModal(false);
    setUserGuess('');
  };

  return (
    <div className="flashcard-list">
      <Flashcard card={cards[currentIndex]} flipped={flipped} setFlipped={setFlipped} />

      <div className="guess-input">
        <input
          type="text"
          placeholder="Type your guess..."
          value={userGuess}
          onChange={(e) => setUserGuess(e.target.value)}
        />
        <button onClick={checkGuess}>Submit</button>
      </div>

      <button onClick={nextCard} className="next-button">
        Next
      </button>

      {showModal && (
        <div className="feedback-modal">
          {feedback}
        </div>
      )}
    </div>
  );
};

export default FlashcardList;
