import React, { useState, createContext } from "react";

export const myContext = createContext();

const initialState = {
  red: false,
  blue: false,
  yellow: false,
};

function ContextProvider({children}) {
  const [cars, setCars] = useState(initialState);
  return (
    <myContext.Provider value={{ cars, setCars }}>
      {children}
    </myContext.Provider>
  )
}

export default ContextProvider
