

import './App.css'
import ContactForm from './components/ContactForm/ContactForm'
import LoginForm from './components/ContactForm/LoginForm/LoginForm'
import LoginFormSecond from './components/LoginFormSecond/LoginFormSecond'
import { useState } from 'react';


function App() {
  const [userData, setUserData ] = useState(null);

  const handleLogin = (data) => {
    setUserData(data);
    console.log('Logged in with:', data);
  }


  return (
    <>
    <ContactForm />
    <LoginForm />
    <LoginFormSecond onLogin={handleLogin}/>
    </>
  )
}

export default App
