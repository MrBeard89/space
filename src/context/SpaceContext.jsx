import React, { createContext, useState } from 'react'

export const SpaceContext = createContext({})

export const SpaceContextProvider = (props) => {
  const [openBtn, setOpenBtn] = useState(false)

  const handleOpenBtn = () => {
    setOpenBtn((prev) => !prev)
  }

  const contextValue = { openBtn, handleOpenBtn, setOpenBtn }

  return <SpaceContext.Provider value={contextValue}>{props.children}</SpaceContext.Provider>
}
