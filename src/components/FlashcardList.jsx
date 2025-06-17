// src/components/FlashcardList.jsx
import React, { useState } from 'react';
import Flashcard from './Flashcard';

const FlashcardList = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(() => Math.floor(Math.random() * cards.length));
  const [flipped, setFlipped] = useState(false);

  const nextCard = () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * cards.length);
    } while (newIndex === currentIndex);
    
    setCurrentIndex(newIndex);
    setFlipped(false); // Reset flip on next card
  };

  return (
    <div>
      <Flashcard card={cards[currentIndex]} flipped={flipped} setFlipped={setFlipped} />
      <button onClick={nextCard} style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}>
        Next
      </button>
    </div>
  );
};

export default FlashcardList;
