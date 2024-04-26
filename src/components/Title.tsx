import { useTypewriter, Cursor} from 'react-simple-typewriter'
import '../App.css'

function Title() {
  const [text] = useTypewriter({
    words: ['Bulk', 'Cut', 'Loose Weight', 'Build Muscle'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 50,
  });

  return (
    <div className='titletext'>
      <div className='title-container'>
        <h1>
          I will help you {' '}
          <span className='typed-text' style={{fontWeight: 'bold', color: '#f62d2d'}}>
            {text}
          </span>
          <Cursor />
        </h1>
      </div>
    </div>
  )
}

export default Title