import React, { useState } from 'react';
import './index.css';
import { useDispatch } from "react-redux";
import { addNote } from "../../store/noteSlice"; // Eyleminizi burada içe aktarmanız gerekecektir

function TextArea() {
  const [text, setText] = useState('');
  const [selectedColor, setSelectedColor] = useState(null);
  const dispatch = useDispatch();

  const handleAddNote = () => {
    if (text.trim() !== "") {
      dispatch(addNote({ text, color: selectedColor }));
      setText("");
      setSelectedColor(null);
    }
  };

  return (
    <div className="y">
      <textarea
        className={`x ${selectedColor}`}
        placeholder="yazz"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <div className="color"> {/* Renk seçimi burada yapılır */}
        <div className={`r r1 ${selectedColor === 'r1' ? 'selected' : ''}`} onClick={() => setSelectedColor('r1')}>
          <input type="checkbox" />
        </div>
        <div className={`r r2 ${selectedColor === 'r2' ? 'selected' : ''}`} onClick={() => setSelectedColor('r2')}>
          <input type="checkbox" />
        </div>
        {/* Diğer renkler için benzer şekilde devam edebilirsiniz */}
      </div>
      <button onClick={handleAddNote}>Add Note</button>
    </div>
  );
}

export default TextArea;
