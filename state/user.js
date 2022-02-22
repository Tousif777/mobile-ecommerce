import React, { createContext, useState } from "react";
import { auth } from "../firebaseconfig";
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState([]);
  return (
    <UserContext.Provider
      value={{
        isLoggedIn,
        user,
        login: (email, password) => {
          auth.signInWithEmailAndPassword(email, password).then((res) => {
            setIsLoggedIn(true);
            setUser(res.user);
          });
        },
        logout: () => {
          auth.signOut().then((res) => {
            setIsLoggedIn(false);
            setUser([]);
          });
        },
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
