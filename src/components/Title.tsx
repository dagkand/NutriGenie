import { useTypewriter, Cursor} from 'react-simple-typewriter'

import '../App.css'

function Title() {
  const [text] = useTypewriter({
    words: ['Bulk', 'Cut', 'Loose Weight', 'Grow Muscle'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 50,
  });

  return (
    <div className='titletext'>
      <h1 style={{margin: '50px'}}>
        I will help you {' '}
        <span style={{fontWeight: 'bold', color: '#f62d2d'}}>
          {text}
        </span>
        <Cursor />
      </h1>
    </div>
  )
}

export default Title
