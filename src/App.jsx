import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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
      <Router>
        <Routes>
          <Route path='/space/' element={<Home />} />
          <Route path='/space/home' element={<Home />} />
          <Route path='/space/crew' element={<Crew />} />
          <Route path='/space/destination' element={<Destination />} />
          <Route path='/space/technology' element={<Technology />} />
          <Route path='/space/*' element={<NotFound />} />
        </Routes>
      </Router>
    </SpaceContextProvider>
  )
}

export default App
