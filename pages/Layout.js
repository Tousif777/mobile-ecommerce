import React, { useContext, useState } from "react";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Cart from "./Cart";
import Home from "./Home";
import Login from "./Login";
import Profile from "./Profile";
import { UserContext } from "../state/user";

const Tab = createMaterialBottomTabNavigator();

const Layout = () => {
  const { isLoggedIn, user, login, logout } = useContext(UserContext);
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Feed"
          activeColor="#e91e63"
          barStyle={{ backgroundColor: "white" }}
        >
          <Tab.Screen
            name="Feed"
            component={Home}
            options={{
              tabBarLabel: "Home",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
              ),
            }}
          />

          {isLoggedIn ? (
            <Tab.Screen
              name="Notifications"
              component={Cart}
              options={{
                tabBarLabel: "Cart",
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="cart" color={color} size={26} />
                ),
              }}
            />
          ) : (
            <Tab.Screen
              name="Login"
              component={Login}
              options={{
                tabBarLabel: "Login",
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons
                    name="login"
                    color={color}
                    size={26}
                  />
                ),
              }}
            />
          )}

          {isLoggedIn ? (
            <Tab.Screen
              name="Profile"
              component={Profile}
              options={{
                tabBarLabel: "Profile",
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons
                    name="account"
                    color={color}
                    size={26}
                  />
                ),
              }}
            />
          ) : null}
        </Tab.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default Layout;
