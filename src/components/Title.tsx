import viteLogo from '/vite.svg'
import { useTypewriter, Cursor} from 'react-simple-typewriter'

import '../App.css'

function App() {
  const [text] = useTypewriter({
    words: ['Bulk', 'Cut', 'Loose Weight', 'Grow Muscle'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 50,
  });

  return (
    <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <h1 style={{margin: '50px'}}>
          I will help you {' '}
          <span style={{fontWeight: 'bold', color: 'green'}}>
            {text}
          </span>
          <Cursor />
        </h1>
    </div>
  )
}

export default App
