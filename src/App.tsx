// import { useState } from 'react'
import './App.css'
import NavbarComponent from './components/NavbarComponent'
import { Goals } from './views/Goals'
//import 'bootstrap/dist/css/bootstrap.min.css'; --> using cdn instead for lastest 

function App() {


  return (
  <div>
    <NavbarComponent />
    <Goals />
  </div>
  )
}

export default App
