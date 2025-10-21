import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// src/App.jsx
import WelcomeMessage from './components/WelcomeMessage';

function App() {
  const [count, setCount] = useState(0)

  return (
  
      <div className="App">
      <WelcomeMessage />  {/* Include the WelcomeMessage component */}
    </div>
  )
}

export default App
