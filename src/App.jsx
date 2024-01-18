import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './components/pages/Home'

import './App.css'

import { Crew } from './components/pages/Crew'
import { Destination } from './components/pages/Destination'
import { Technology } from './components/pages/Technology'
import { NotFound } from './components/pages/NotFound'
import { SpaceContextProvider } from './context/SpaceContext'

function App() {
  return (
    <SpaceContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/crew' element={<Crew />} />
          <Route path='/destination' element={<Destination />} />
          <Route path='/technology' element={<Technology />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </SpaceContextProvider>
  )
}

export default App
