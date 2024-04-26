import '../App.css'
import { Link } from 'react-router-dom';

function App() {

  return (
    <div className='navigation'>
        <ul className="pages">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/cats'>Cats</Link></li>
            <li><Link to='/dogs'>Dogs</Link></li>
            <li><Link to='/birds'>Birds</Link></li>
         </ul>
    </div>
  )
}

export default App
