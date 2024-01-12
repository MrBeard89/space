import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './components/pages/Home'

import './App.css'
import { Navbar } from './components/navbar/Navbar'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
