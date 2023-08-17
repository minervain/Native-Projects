import React from 'react';
import './input.css';

function Input({ onInputChange }) {
  return (
    <div className="inputS">
      <div className="inputC">
        <input
          type="text"
          className="input"
          placeholder="Search ..."
          onChange={e => onInputChange(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Input;
