import React, { useState } from "react";

const AuthContext = React.createContext();

const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [userName, setUserName] = useState('')


  const handleLogout = () => {
    //  set token back to " " once logged out
    setToken("")
    
  };

  const value = {setUserName, setToken, handleLogout, token, userName };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthContextProvider };