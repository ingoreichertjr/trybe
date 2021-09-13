import React, { useState, createContext } from "react";

export const myContext = createContext();

const initialState = {
  red: false,
  blue: false,
  yellow: false,
};

function ContextProvider({children}) {
  const [cars, setCars] = useState(initialState);
  const [signal, setSignal] = useState('red')
  return (
    <myContext.Provider value={{ cars, setCars, signal, setSignal }}>
      {children}
    </myContext.Provider>
  )
}

export default ContextProvider
