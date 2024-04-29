import React, { useState } from 'react';
import '../App.css';

function Calculator() {
  const [gender, setGender] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [activityLevel, setActivityLevel] = useState('');
  const [bmr, setBMR] = useState(0);
  const [calories, setCalories] = useState(0);
  const [showWhatNow, setShowWhatNow] = useState(false);

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleActivityLevelChange = (event) => {
    setActivityLevel(event.target.value);
  };

  const calculateCalories = () => {
    let temp = 0;
    if (gender === 'male' && weight && height && age && activityLevel) {
      temp = Math.round(10 * weight + 6.25 * height - 5 * age + 5);
    } else if (gender === 'female' && weight && height && age && activityLevel) {
      temp = Math.round(10 * weight + 6.25 * height - 5 * age - 161);
    }
    setBMR(temp);

    switch (activityLevel) {
      case 'sedentary':
        temp *= 1.2;
        break;
      case 'light':
        temp *= 1.375;
        break;
      case 'moderate':
        temp *= 1.55;
        break;
      case 'heavy':
        temp *= 1.725;
        break;
      case 'athlete':
        temp *= 1.9;
        break;
      default:
        break;
    }

    setCalories(Math.round(temp));
    setShowWhatNow(true);
  };

  const scrollToResults = () => {
    // Scroll to the results section
    const resultsSection = document.getElementById('results');
    resultsSection.scrollIntoView({ behavior: 'smooth' });
  };

  const isInputValid = gender && weight && height && age && activityLevel;

  return (
    <div className='calculator'>
      <div className='input-group'>
        <label className='activitylvl'>
          Gender:
          <select value={gender} onChange={handleGenderChange}>
            <option value=''>Select gender</option>
            <option value='male'>Male</option>
            <option value='female'>Female</option>
          </select>
        </label>
      </div>
      <div className='input-group'>
        <label>
          Age:
          <input
            type='number'
            value={age}
            onChange={handleAgeChange}
            placeholder='Enter age'
          />
        </label>
      </div>
      <div className='input-group'>
        <label>
          Weight:
          <input
            type='number'
            value={weight}
            onChange={handleWeightChange}
            placeholder='Enter weight (kg)'
          />
        </label>
      </div>
      <div className='input-group'>
        <label>
          Height:
          <input
            type='number'
            value={height}
            onChange={handleHeightChange}
            placeholder='Enter height (cm)'
          />
        </label>
      </div>
      <div className='input-group'>
        <label className='activitylvl'>
          Activity Level:
          <select value={activityLevel} onChange={handleActivityLevelChange}>
            <option value='sedentary'>Sedentary</option>
            <option value='light'>Lightly active</option>
            <option value='moderate'>Moderately active</option>
            <option value='heavy'>Very active</option>
            <option value='athlete'>Athlete</option>
          </select>
        </label>
      </div>
      {showWhatNow && ( // Render result section conditionally
        <div className='input-group' id='results'>
          <h2>Your calorie needs</h2>
          <p>BMR: {bmr}</p>
          <p>Calories: {calories}</p>
        </div>
      )}
      <div className='input-group'></div>
      <button disabled={!isInputValid} onClick={calculateCalories}>Calculate</button>
      {showWhatNow && (
        <div className='input-group'>
          <h1 onClick={scrollToResults} style={{ cursor: 'pointer' }}>
            What now?
          </h1>
        </div>
      )}
    </div>
  );
}

export default Calculator;
