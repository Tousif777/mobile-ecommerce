import React, { useContext } from "react";
import { UserContext } from "../state/user";
import Signin from "./Signin";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signup from "./Signup";

const Login = () => {
  const { login } = useContext(UserContext);
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Signin"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
};

export default Login;
