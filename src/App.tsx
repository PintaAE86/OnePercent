// import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Goals } from './views/Goals'
//import 'bootstrap/dist/css/bootstrap.min.css'; --> using cdn instead for lastest 

function App() {


  return (
  <div>
    <Navbar />
    <Goals />
  </div>
  )
}

export default App
