import '../App.css'
import { Link } from 'react-router-dom';

function App() {

  return (
    <div className='navigation'>
        <ul className="pages">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/Positive'>Why?</Link></li> {/* Why should you have knowledge of BMR and macro split? */}
            <li><Link to='/Studies'>How?</Link></li> {/* How calculations and macro split is suggested */}
            <li><Link to='/About'>About</Link></li> {/* Temporary for additional info */}
         </ul>
    </div>
  )
}

export default App
