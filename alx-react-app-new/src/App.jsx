import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header'
import MainContent from './components/MainContent';
import Footer from './components/Footer'
import UserProfile from './components/UserProfile';
import Counter from './components/counter';

function App() {
  const [count, setCount] = useState(0)

  return (
  
      <div className="App">
        <div>
            <Counter /> {/* This will show your counter */}
      <h1>User Profile Example</h1>
      <UserProfile 
        name="Alice"
        age="25"
        bio="Loves hiking and photography"
      />
      <UserProfile 
        name="Sam"
        age="27"
        bio="Tech enthusiast and cybersecurity auditor"
      />
    </div>
        <Header />
      <MainContent />
      
      <Footer />
      <WelcomeMessage />  {/* Include the WelcomeMessage component */}
    </div>
    
  )

}

export default App
