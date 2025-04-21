import { createContext, useContext, useState } from "react";

const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");

  return (
    <GlobalStateContext.Provider value={{ data, setData, name, setName }}>
      {children}
    </GlobalStateContext.Provider>
  );
};
export const useGlobalState = () => useContext(GlobalStateContext);
