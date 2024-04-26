import '../App.css'

interface ResultsProps {
  bmr: number;
  calories: number;
}

function Results({ bmr, calories }: ResultsProps) {
  return (
    <div className='results'>
      <h1>Results</h1>
      <p>BMR: {bmr}</p>
      <p>Calories: {calories}</p>
    </div>
  );
}

export default Results;