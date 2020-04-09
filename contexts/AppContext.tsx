import React from "react";

const initialState = {
  isMenuVisible: false,
  isShelfVisible: false
};

const reducer = (state, action) => {
  switch (action.type) {
    case "menuVisible": {
      return {
        ...state,
        isMenuVisible: action.payload
      };
    }
    case "shelfVisible": {
      return {
        ...state,
        isShelfVisible: action.payload
      };
    }
    default:
      return state;
  }
};

export const AppContext = React.createContext({
  ...initialState,
  dispatch: action => null
});

export const AppContextProvider = React.memo(({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
});

export const useAppContext = () => {
  const context = React.useContext(AppContext);

  if (context === null) {
    throw Error("useAppContext: Please provide AppContextProvider.");
  }

  return context;
};
