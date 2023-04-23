import { createContext, useContext, useState } from 'react';

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');
  const [navColor, setNavColor] = useState(false);
  const [backColor, setBackColor] = useState(' ');
  const [textColor, setTextColor] = useState(0);
  const [secondBackColor, setSecondBackColor] = useState(0);
  const [secondColor, setSecondColor] = useState(0);

  return (
    <StateContext.Provider value={{theme, secondBackColor, backColor, navColor, textColor, secondColor, 
    setTheme, setSecondBackColor, setBackColor, setNavColor, setTextColor, setSecondColor }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);