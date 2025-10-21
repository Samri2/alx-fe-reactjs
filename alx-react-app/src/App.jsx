import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WelcomeMessage from './components/WelcomeMessage';
import Header from './header'
import MainContent from './MainContent';
import Footer from './footer'
function App() {
  const [count, setCount] = useState(0)

  return (
  
      <div className="App">
        <Header />
      <MainContent />
      <Footer />
      <WelcomeMessage />  {/* Include the WelcomeMessage component */}
    </div>
  )
}

export default App
