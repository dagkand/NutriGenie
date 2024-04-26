import '../App.css'

function About() {

  return (
    <div className='macrosinfo'>
        <h2>Importance of BMR and Macro Split</h2>
        <p>Understanding your Basal Metabolic Rate (BMR) and macronutrient split is crucial for optimizing your nutrition and achieving your health and fitness goals.</p>
        <h3>BMR</h3>
        <p>Your BMR represents the number of calories your body needs to maintain basic physiological functions while at rest. It's essential to know your BMR because:</p>
        <ul>
        <li>It forms the foundation for calculating your daily calorie needs.</li>
        <li>Knowing your BMR helps you create a personalized nutrition plan tailored to your specific energy requirements.</li>
        <li>It enables you to adjust your calorie intake for weight loss, maintenance, or muscle gain goals.</li>
        </ul>
        <h3>Macro Split</h3>
        <p>A macro split refers to the distribution of macronutrients (protein, carbohydrates, and fats) in your diet. Understanding your macro split is important because:</p>
        <ul>
        <li>Each macronutrient plays a distinct role in your body's functions, energy production, and overall health.</li>
        <li>Optimizing your macro split can help you achieve better performance in workouts, improve recovery, and support muscle growth.</li>
        <li>It allows for more precise control over your nutrient intake, which is essential for reaching specific fitness goals.</li>
        <p>https://pubmed.ncbi.nlm.nih.gov/1400008/</p>
        </ul>
        <p>By combining knowledge of your BMR with an appropriate macro split, you can develop a nutrition strategy that supports your individual needs, promotes overall well-being, and enhances your fitness journey.</p>
        <h2>Importance of BMR and Macro Split with Mifflin-St Jeor Equation</h2>
        <p>Understanding your Basal Metabolic Rate (BMR) and macronutrient split is crucial for optimizing your nutrition and achieving your health and fitness goals. The Mifflin-St Jeor Equation is a widely used method for calculating BMR based on factors such as age, gender, weight, and height.</p>
        <h3>Calculations with Mifflin-St Jeor Equation</h3>
        <p>The Mifflin-St Jeor Equation for calculating BMR is as follows:</p>
        <p>For men: BMR = (10 * weight in kg) + (6.25 * height in cm) - (5 * age in years) + 5</p>
        <p>For women: BMR = (10 * weight in kg) + (6.25 * height in cm) - (5 * age in years) - 161</p>
    </div>
  )
}

export default About
