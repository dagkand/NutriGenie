import { useState } from 'react';
import '../App.css';

function App() {
  const [gender, setGender] = useState('');
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [age, setAge] = useState(0); // New state variable for age
  const [activityLevel, setActivityLevel] = useState('');
  const [bmr, setBMR] = useState(0);
  const [calories, setCalories] = useState(0);

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };

  const handleAgeChange = (event) => { // Handler for age change
    setAge(event.target.value);
  };

  const handleActivityLevelChange = (event) => {
    setActivityLevel(event.target.value);
  };

  const calculateCalories = () => {
    // Calculate BMR
    let temp = 0;
    if (gender === 'male') {
      temp = 10 * weight + 6.25 * height - 5 * age + 5; // Adjusted for age
    } else if (gender === 'female') {
      temp = 10 * weight + 6.25 * height - 5 * age - 161; // Adjusted for age and gender
    }
    setBMR(temp);
  
    // Adjust BMR based on activity level
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
  
    setCalories(temp);
  };
  
  return (
    <div className='calculator'>
      <div className='input-group'>
        <label>
          <input
            type='radio'
            name='gender'
            value='male'
            checked={gender === 'male'}
            onChange={handleGenderChange}
          />
          Male
        </label>
        <label>
          <input
            type='radio'
            name='gender'
            value='female'
            checked={gender === 'female'}
            onChange={handleGenderChange}
          />
          Female
        </label>
      </div>
      <div className='input-group'>
        <label>
          Age: {/* Adding input for age */}
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
        <label>
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
      <div className='input-group'></div>
      <button onClick={calculateCalories}>Calculate</button>
      <div className='input-group'>
        <p>BMR: {bmr}</p>
        <p>Calories: {calories}</p>
      </div>
    </div>
  );
}

export default App;