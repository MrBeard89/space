import React, { createContext, useState } from 'react'
import { data as dbData } from '../utils/data'

export const SpaceContext = createContext({})

export const SpaceContextProvider = (props) => {
  //Navbar mobile state
  const [openBtn, setOpenBtn] = useState(false)
  //Data states
  const [destinations, setDestinations] = useState(dbData.destinations)
  const [crew, setCrew] = useState(dbData.crew)
  const [technology, setTechnology] = useState(dbData.technology)

  //Navbar handle function
  const handleOpenBtn = () => {
    setOpenBtn((prev) => !prev)
  }

  const contextValue = { openBtn, handleOpenBtn, setOpenBtn, destinations, crew, technology }

  return <SpaceContext.Provider value={contextValue}>{props.children}</SpaceContext.Provider>
}
