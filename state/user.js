import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebaseconfig";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState([AsyncStorage.getItem("user")]);
  useEffect(() => {
    AsyncStorage.getItem("user").then((user) => {
      if (user) {
        setUser(user);
        setIsLoggedIn(true);
        console.log("user", user);
      }
    });
  }, []);

  return (
    <UserContext.Provider
      value={{
        isLoggedIn,
        user,

        login: (email, password) => {
          auth
            .signInWithEmailAndPassword(email, password)
            .then((res) => {
              setIsLoggedIn(true);
              setUser(res.user);
              AsyncStorage.setItem("user", res.user.email);
            })
            .catch((err) => {
              alert(err.message);
            });
        },
        logout: () => {
          auth
            .signOut()
            .then(() => {
              setIsLoggedIn(false);
              setUser(null);
              AsyncStorage.removeItem("user");
            })
            .catch((err) => {
              alert(err.message);
            });
        },
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
