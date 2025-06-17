// src/components/Flashcard.jsx
import React from 'react';
import './Flashcard.css';

const Flashcard = ({ card, flipped, setFlipped }) => {
  return (
    <div className="flashcard" onClick={() => setFlipped(!flipped)}>
      {flipped ? (
        <p>{card.answer}</p>
      ) : (
        <img src={card.question} alt="Cartoon" />
      )}
    </div>
  );
};

export default Flashcard;
