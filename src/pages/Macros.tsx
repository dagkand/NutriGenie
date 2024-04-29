import '../App.css'
import Navbar from '../components/Navbar'
import MacroInfo from '../components/MacroInfo'
import Graph from '../components/Graph'
import MacroSplit from '../components/MacroSplit'
import MacroCalculator from '../components/MacroCalculator'
import Calculator from '../components/Calculator'

function Macros() {

  return (
    <>
    <Navbar />
    <MacroInfo />
    <Calculator />
    <Graph />
    <MacroSplit />
    <MacroCalculator />
    </>
  )
}

export default Macros
