import { Box, Button, Heading, Input, Text, View } from "native-base";
import React, { useContext, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { UserContext } from "../state/user";

const Signin = ({ navigation }) => {
  const { login, logout } = useContext(UserContext);

  const [logindata, setlogindata] = useState({
    email: "",
    password: "",
  });

  const onLogin = () => {
    try {
      login(logindata.email, logindata.password);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <View>
        <Box w="80" p="10" shadow="3">
          <Heading mb={"10"}>Sign In</Heading>

          <Input
            placeholder="Email"
            onChange={(e) =>
              setlogindata({ ...logindata, email: e.nativeEvent.text })
            }
          />
          <Input
            placeholder="Password"
            onChange={(e) =>
              setlogindata({ ...logindata, password: e.nativeEvent.text })
            }
          />
          <Button
            block
            onPress={
              logindata.password !== "" && logindata.email !== ""
                ? onLogin
                : () => alert("Please enter email and password")
            }
          >
            <Text color="white">Sign In</Text>
          </Button>
          <Button block mt="10" onPress={() => navigation.navigate("Signup")}>
            <Text color="white">Sign Up</Text>
          </Button>
        </Box>
      </View>
    </SafeAreaView>
  );
};

export default Signin;
