import React, { useState } from 'react';
import './color.css';

function Color({ selectedColors, onColorSelect, onAddClick }) {
    const [colorChecked, setColorChecked] = useState({});

    const handleCheckboxChange = (color, isChecked) => {
        setColorChecked(prevState => ({
            ...prevState,
            [color]: isChecked,
        }));
    };

    return (
        <div className="color">
            <div className="renkler">
                {selectedColors && selectedColors.map(color => (
                    <div className={`r ${color}`} key={color}>
                        <input
                            type="checkbox"
                            checked={colorChecked[color] || false}
                            onChange={e => handleCheckboxChange(color, e.target.checked)}
                        />
                    </div>
                ))}
            </div>
            <button className="btn" onClick={() => onAddClick(colorChecked)}>ADD</button>
        </div>
    );
}

export default Color;
