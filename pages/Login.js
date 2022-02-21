import { Center, Heading, Button, View, Text } from "native-base";
import React, { useContext } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { UserContext } from "../state/user";

const googleIcon = (
  <MaterialCommunityIcons name="google" size={24} color={"white"} />
);
const Login = () => {
  const { login } = useContext(UserContext);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Heading>Fake shop app</Heading>
      <Button mt="10" bg="red.400" onPress={() => login()}>
        <Center flexDirection="row" justifyContent="space-between">
          {googleIcon}
          <Text color="white">Login with Google</Text>
        </Center>
      </Button>
    </View>
  );
};

export default Login;
