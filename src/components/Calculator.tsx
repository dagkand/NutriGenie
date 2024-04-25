import { useState } from 'react';
import '../App.css';

function App() {
  const [gender, setGender] = useState('');
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [activityLevel, setActivityLevel] = useState('');

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };

  const handleActivityLevelChange = (event) => {
    setActivityLevel(event.target.value);
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
            <option value='sedentary'>Sedentary (little to no exercise)</option>
            <option value='light'>Lightly active (light exercise/sports 1-3 days/week)</option>
            <option value='moderate'>Moderately active (moderate exercise/sports 3-5 days/week)</option>
            <option value='heavy'>Very active (hard exercise/sports 6-7 days a week)</option>
            <option value='athlete'>Athlete (very hard exercise/sports & physical job or 2x training)</option>
          </select>
        </label>
        <div className='input-group'></div>
        <button>Calculate</button>
      </div>
      {/* Calculator screen or other components can be added here */}
    </div>
  );
}

export default App;
