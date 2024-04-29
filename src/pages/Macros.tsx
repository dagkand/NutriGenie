import '../App.css'
import Navbar from '../components/Navbar'
import MacroInfo from '../components/MacroInfo'
import Graph from '../components/Graph'
import MacroSplit from '../components/MacroSplit'
import MacroCalculator from '../components/MacroCalculator'

function Macros() {

  return (
    <>
    <Navbar />
    <MacroInfo />
    <Graph />
    <MacroSplit />
    <MacroCalculator />
    </>
  )
}

export default Macros
