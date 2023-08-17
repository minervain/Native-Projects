import React from 'react';
import './Card.css';

function Card({ notes }) {
  return (
    <div>
      {notes.map((note, index) => (
        <div className="Card-contain" key={index}>
          <h1>{note.text}</h1>
        </div>
      ))}
    </div>
  );
}

export default Card;
