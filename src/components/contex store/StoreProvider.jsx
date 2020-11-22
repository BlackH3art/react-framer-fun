import React, { createContext, useEffect, useState } from 'react';

export const StoreContext = createContext(null);

const StoreProvider = ({ children }) => {

  const [ user, setUser ] = useState(null);
  const [ isLogged, setIsLogged ] = useState(false)


  useEffect(() => {

  }, [])

  return (
    <>
      <StoreContext.Provider value={{
        user,
        setUser
      }}>
        {children}
      </StoreContext.Provider>
    </>
  )
}

export default StoreProvider;