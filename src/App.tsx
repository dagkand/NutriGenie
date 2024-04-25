import viteLogo from '/vite.svg'
import { useTypewriter, Cursor} from 'react-simple-typewriter'

import './App.css'

function App() {
  const [text] = useTypewriter({
    words: ['Bulk', 'Cut', 'Loose Weight', 'Grow Muscle'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <>
      <div>
        <h1 style={{margin: '50px'}}>
          I will help you {' '}
          <span style={{fontWeight: 'bold', color: 'green'}}>
            {text}
          </span>
          <Cursor />
        </h1>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
    </>
  )
}

export default App
