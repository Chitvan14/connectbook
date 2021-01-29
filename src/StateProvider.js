// set datalayer
// track basket
import React, { createContext, useContext, useReducer } from "react";

// prepare datalayer
export const StateContext = createContext();

// provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// use inside of component
export const useStateValue = () => useContext(StateContext);
