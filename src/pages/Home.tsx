import Navbar from '../components/Navbar'
import Title from '../components/Title'
import Calculator from '../components/Calculator'
import Results from '../components/Results'
import Graph from '../components/Graph'
import '../App.css'

function Home() {
  
  return (
    <>
      <Navbar />
      <Title />
      <Calculator />
      {/* <Results /> */}
      <Graph />
    </>
  )
}

export default Home
