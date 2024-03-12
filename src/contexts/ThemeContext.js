import React, { createContext, useContext, useReducer } from "react";

const ThemeContext = createContext();

const initialState = {
  Darktheme: false,
  userPreferences: {
    fontSize: "medium",
    reduceAnimations: false,
  },
};

function themeReducer(state, action) {
  if (action.type == "setTheme") {
    return {
      ...state,
      theme: action.theme,
    };
  } else if (action.type == "setFontSize") {
    return {
      ...state.userPreferences,
      fontSize: action.fontSize,
    };
  } else if (action.type == "setRedAnimation") {
    return {
      ...state.userPreferences,
      reduceAnimations: action.reduceAnimations,
    };
  }
}

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);
  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Create and use your own hook instead of using useContext in the components
export const useTheme = () => useContext(ThemeContext);
