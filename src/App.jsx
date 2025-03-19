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
          <Route path='/space-tourism-website/' element={<Home />} />
          <Route path='/space-tourism-website/home' element={<Home />} />
          <Route path='/space-tourism-website/crew' element={<Crew />} />
          <Route path='/space-tourism-website/destination' element={<Destination />} />
          <Route path='/space-tourism-website/technology' element={<Technology />} />
          <Route path='/space-tourism-website/*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </SpaceContextProvider>
  )
}

export default App
