import React, { createContext, useState } from "react";
import { auth } from "../firebaseconfig";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState([]);
  const [cart, setCart] = useState([]);
  return (
    <UserContext.Provider
      value={{
        isLoggedIn,
        user,
        cart,
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
        addToCart: (item) => {
          setCart([...cart, item]);
        },
        removeFromCart: (item) => {
          setCart(cart.filter((cartItem) => cartItem.id !== item.id));
        },
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
