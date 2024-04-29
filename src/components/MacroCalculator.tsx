import React, { useState } from 'react';
import '../App.css';

interface MacroSplit {
  protein: number;
  carbs: number;
  fat: number;
}

enum Goal {
  LOSE_WEIGHT = 'lose_weight',
  MAINTAIN = 'maintain',
  BULK = 'bulk',
}

interface GoalCalories {
  goal: Goal;
  caloriesNeeded: number;
}

function MacroCalculator() {
  const [goal, setGoal] = useState<Goal>('');
  const [caloriesNeeded, setCaloriesNeeded] = useState<number>(0);
  const [macroSplit, setMacroSplit] = useState<MacroSplit | null>(null);

  const handleGoalChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setGoal(event.target.value as Goal);
  };

  const handleCaloriesNeededChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCaloriesNeeded(Number(event.target.value));
  };

  const calculateMacroSplit = () => {
    let proteinRatio: number;
    let carbsRatio: number;
    let fatRatio: number;

    switch (goal) {
      case Goal.LOSE_WEIGHT:
        proteinRatio = 0.35;
        carbsRatio = 0.30;
        fatRatio = 0.25;
        break;
      case Goal.MAINTAIN:
        proteinRatio = 0.33;
        carbsRatio = 0.33;
        fatRatio = 0.33;
        break;
      case Goal.BULK:
        proteinRatio = 0.30;
        carbsRatio = 0.50;
        fatRatio = 0.20;
        break;
      default:
        throw new Error('Invalid goal');
    }

    const protein = Math.round((proteinRatio * caloriesNeeded) / 4); // 1g protein = 4 calories
    const carbs = Math.round((carbsRatio * caloriesNeeded) / 4); // 1g carb = 4 calories
    const fat = Math.round((fatRatio * caloriesNeeded) / 9); // 1g fat = 9 calories

    setMacroSplit({ protein, carbs, fat });
  };

  return (
    <div className='calculator'>
      <div className='input-group'>
        <label>
          Goal:
          <select value={goal} onChange={handleGoalChange}>
            <option value=''>Select goal</option>
            <option value={Goal.LOSE_WEIGHT}>Lose Weight</option>
            <option value={Goal.MAINTAIN}>Maintain</option>
            <option value={Goal.BULK}>Bulk</option>
          </select>
        </label>
      </div>
      <div className='input-group'>
        <label>
          Calories Needed:
          <input
            type='number'
            value={caloriesNeeded}
            onChange={handleCaloriesNeededChange}
            placeholder='Enter calories needed'
          />
        </label>
      </div>
      <div className='input-group'>
        <button onClick={calculateMacroSplit}>Calculate</button>
      </div>
      {macroSplit && (
        <div className='input-group'>
          <h2>Macro Split</h2>
          <p>Protein: {macroSplit.protein}g</p>
          <p>Carbs: {macroSplit.carbs}g</p>
          <p>Fat: {macroSplit.fat}g</p>
        </div>
      )}
    </div>
  );
}

export default MacroCalculator;
