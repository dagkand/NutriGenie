import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Positive from './pages/Positive';
import Macros from './pages/Macros';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/positive" element={<Positive />} />
        <Route path="/macros" element={<Macros />} />
      </Routes>
    </Router>
  );
}

export default App;
