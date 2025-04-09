import React, { createContext, useReducer, useEffect } from "react";

export const SignInContext = createContext({});

const initialState = {
  email: "",
  password: "",
  showPassword: false,
  errors: { email: "", password: "" },
};

const reduser = (state, action) => {
  switch (action.type) {
    case "EMAIL":
      return { ...state, email: action.payload };
    case "PASSWORD":
      return { ...state, password: action.payload };
    case "SHOW-PASSWORD":
      return { ...state, showPassword: !state.showPassword };
    case "ERRORS":
      return { ...state, errors: action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

export const LoginProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reduser, initialState);

  useEffect(() => {
    const saveEmail = localStorage.getItem("email");
    const savePassword = localStorage.getItem("password");
    if (saveEmail) dispatch({ type: "EMAIL", payload: saveEmail });
    if (savePassword) dispatch({ type: "PASSWORD", payload: savePassword });
  }, []);

  return (
    <SignInContext.Provider value={{ state, dispatch }}>
      {children}
    </SignInContext.Provider>
  );
};
