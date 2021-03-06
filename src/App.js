import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <HomePage />
        <Footer />
      </Router>
    </div>
  )
}

export default App
