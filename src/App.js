import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Footer />
      </Router>
    </div>
  )
}

export default App
