import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './components/pages/Home'

import './App.css'
import { Navbar } from './components/navbar/Navbar'
import { Crew } from './components/pages/Crew'
import { Destination } from './components/pages/Destination'
import { Technology } from './components/pages/Technology'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/crew' element={<Crew />}></Route>
          <Route path='/destination' element={<Destination />}></Route>
          <Route path='/technology' element={<Technology />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
