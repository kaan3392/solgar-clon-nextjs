import React, { createContext, useReducer } from "react";

type MenuContextInterface = typeof defaultState;

type Actions = { type: "Open" } | { type: "Close" } | { type: "Toggle" };

interface ProviderProps {
  children :React.ReactNode
}

const defaultState  = {
  menu: false,
};

export const MenuContext = createContext<{
  state: MenuContextInterface;
  dispatch:React.Dispatch<Actions>
}>({state:defaultState, dispatch:() => {}});



const MenuReducer  = (state: MenuContextInterface, action: Actions) => {
  switch (action.type) {
    case "Open":
      return { menu: true };
    case "Close":
      return { menu: false };
    case "Toggle":
      return { menu: !state.menu };
    default:
      throw new Error();
  }
};

export const MenuContextProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(MenuReducer, defaultState);

  return (
    <MenuContext.Provider value={{
      state,
      dispatch
    }}>{children}</MenuContext.Provider>
  );
};
