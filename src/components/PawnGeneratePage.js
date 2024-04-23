import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './pawnGenerateStyles.css'; // Import the CSS file

const PawnGeneratePage = () => {
  const [crossWeight, setCrossWeight] = useState('');
  const [nextWeight, setNextWeight] = useState('');
  const [pawnValue, setPawnValue] = useState('');
  const [rupeesValue, setRupeesValue] = useState('');
  const navigate = useNavigate();

  const handleNext = () => {
    // Navigate to the PersonalDetailsPage using navigate function
    navigate('/personal-details');
  };

  const calculateValues = () => {
    // Convert weights to numbers
    const crossWeightNum = parseFloat(crossWeight);
    const nextWeightNum = parseFloat(nextWeight);

    // Calculate pawn value (assuming 8 grams per pawn)
    const totalWeight = crossWeightNum || nextWeightNum; // Use whichever weight is entered
    const pawnCount = Math.floor(totalWeight / 8); // Number of pawns
    const pawnValue = pawnCount * 160000;

    setPawnValue(pawnCount);
    setRupeesValue(pawnValue);
  };

  return (
    <div className="container">
      <h2>Pawn Generation</h2>
      <div className="input-group">
        <label htmlFor="crossWeight">Cross Weight:</label>
        <input
          type="text"
          id="crossWeight"
          value={crossWeight}
          onChange={(e) => setCrossWeight(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="nextWeight">Next Weight:</label>
        <input
          type="text"
          id="nextWeight"
          value={nextWeight}
          onChange={(e) => setNextWeight(e.target.value)}
        />
      </div>
      <button className="calculate-btn" onClick={calculateValues}>Calculate</button>
      <div>
        <p>Number of Pawns: {pawnValue}</p>
        <p>Pawn Value (in Rupees): {rupeesValue}</p>
      </div>
      <button className="next-btn" onClick={handleNext}>Next</button>
    </div>
  );
}

export default PawnGeneratePage;
