import React, { createContext, useReducer } from "react";

export type MenuContextInterface = {
  menu?: boolean;
  filterCat?: any;
  option?: boolean;
};

type Actions =
  | { type: "Open" }
  | { type: "Close" }
  | { type: "Toggle" }
  | { type: "OptionOpen" }
  | { type: "OptionClose" }
  | { type: "Filter"; payload: string | null };

interface ProviderProps {
  children: React.ReactNode;
}

const defaultState: MenuContextInterface = {
  menu: false,
  filterCat: null,
  option: false,
};

export const MenuContext = createContext<{
  state: MenuContextInterface;
  dispatch: React.Dispatch<Actions>;
}>({ state: defaultState, dispatch: () => {} });

const MenuReducer = (state: MenuContextInterface, action: Actions) => {
  switch (action.type) {
    case "Open":
      return { menu: true };
    case "Close":
      return { menu: false };
    case "Toggle":
      return { menu: !state.menu };
    case "OptionOpen":
      return { option: true };
    case "OptionClose":
      return { option: false };
    case "Filter":
      return { filterCat: action.payload };
    default:
      return state;
  }
};

export const MenuContextProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(MenuReducer, defaultState);

  return (
    <MenuContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};
