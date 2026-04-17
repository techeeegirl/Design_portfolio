import { useContext, createContext, useState } from "react";

export const NavContext = createContext();

export const NavProvider = ({ children }) => {
  const [navPage, setNavPage] = useState(0);

  return (
    <NavContext.Provider value={{ navPage, setNavPage }}>
      {children}
    </NavContext.Provider>
  );
};
