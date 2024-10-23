import { createContext, useContext, useState } from "react";

const BurgerMenu = createContext();

// eslint-disable-next-line react/prop-types
export const MenuContext = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  return (
    <BurgerMenu.Provider
      value={{
        toggleMenu,
        menuOpen,
      }}
    >
      {children}
    </BurgerMenu.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useMenu = () => {
  const context = useContext(BurgerMenu);
  if (!context) {
    throw new Error("useMenu must be used within an MenuProvider");
  }
  return context;
};
