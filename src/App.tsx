// import { useState } from 'react'
import './App.css'
import NavbarComponent from './components/NavbarComponent'
import { Goals } from './views/Goals';
import Login from './views/Login';
import { SignUp } from './views/SignUp';
//import 'bootstrap/dist/css/bootstrap.min.css'; --> using cdn instead for lastest 

function App() {
  return (
  <div>
    <NavbarComponent />
    <Goals />
    <SignUp />
    <Login />
  </div>
  )
}

export default App
