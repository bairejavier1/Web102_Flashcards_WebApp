// src/App.jsx
import React from 'react';
import FlashcardList from './components/FlashcardList';
import cards from './data';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>🎯 Cartoon's Characters Flashcard Game</h1>
      <p>Click the card to reveal the cartoon's character name!</p>
      <p>Total cards: {cards.length}</p>
      <FlashcardList cards={cards} />
    </div>
  );
}

export default App;