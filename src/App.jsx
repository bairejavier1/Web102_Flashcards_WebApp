// src/App.jsx
import React, { useState } from 'react';
import FlashcardList from './components/FlashcardList';
import cards from './data';
import './App.css';

function App() {
  const [masteredCards, setMasteredCards] = useState([]);
  const [shuffledCards, setShuffledCards] = useState(cards); // NEW

  const resetMastered = () => {
    setMasteredCards([]);
    setShuffledCards(cards); // Reset to original order
  };

  // Only cards not mastered
  const activeCards = shuffledCards.filter(card => !masteredCards.includes(card.id));

  return (
    <div className="App">
      <h1>🎯 Cartoon Character Flashcards</h1>
      <p>Guess the cartoon character's name based on the image!</p>
      <p>Total cards remaining: {activeCards.length}</p>

      <FlashcardList
        cards={activeCards}
        masteredCards={masteredCards}
        setMasteredCards={setMasteredCards}
        resetMastered={resetMastered}
        shuffledCards={shuffledCards}
        setShuffledCards={setShuffledCards} // Pass setter
      />
    </div>
  );
}

export default App;
