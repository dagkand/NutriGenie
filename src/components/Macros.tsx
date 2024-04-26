import '../App.css'

function Results() {

  return (
    <div className='calories'>
        <h2>Importance of BMR and Macro Split with Mifflin-St Jeor Equation</h2>
        <p>Understanding your Basal Metabolic Rate (BMR) and macronutrient split is crucial for optimizing your nutrition and achieving your health and fitness goals. The Mifflin-St Jeor Equation is a widely used method for calculating BMR based on factors such as age, gender, weight, and height.</p>
        <h3>Calculations with Mifflin-St Jeor Equation</h3>
        <p>The Mifflin-St Jeor Equation for calculating BMR is as follows:</p>
        <p>For men: BMR = (10 * weight in kg) + (6.25 * height in cm) - (5 * age in years) + 5</p>
        <p>For women: BMR = (10 * weight in kg) + (6.25 * height in cm) - (5 * age in years) - 161</p>
    </div>
  )
}

export default Results
