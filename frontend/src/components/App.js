import { Link } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Link to={'/list'}>Start Voting</Link>
      <Link to={'/list/results'}>Show Result</Link>
    </div>
  )
}

export default App
