

import './App.css'
import ContactForm from './components/ContactForm/ContactForm'
import LoginForm, { LoginFormThird, MyComponent } from './components/ContactForm/LoginForm/LoginForm'
import LoginFormSecond from './components/LoginFormSecond/LoginFormSecond'
import { useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import LangSwitcher, { CheckBox, RadioButton } from './components/Select/Select';


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
    <MyComponent />
    <LoginFormThird />
    <SearchBar />
    <LangSwitcher />
    <RadioButton />
    <CheckBox />
    </>
  )
}

export default App;
