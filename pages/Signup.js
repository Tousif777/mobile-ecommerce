import { Box, Button, Heading, Input, Text, View } from "native-base";
import React, { useContext, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import firebase from "firebase";

const Signup = ({ navigation }) => {
  const auth = firebase.auth();
  const [signupdata, setSignupdata] = useState({
    email: "",
    password: "",
    confirmpassword: "",
  });

  const onLogin = () => {
    auth
      .createUserWithEmailAndPassword(signupdata.email, signupdata.password)
      .then((res) => {
        navigation.navigate("Signin");
      });
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box p="10" shadow="3" w="96">
        <Heading mb={"10"}>Sign Up</Heading>
        <Input
          placeholder="Email"
          onChange={(e) =>
            setSignupdata({ ...signupdata, email: e.nativeEvent.text })
          }
        />
        <Input
          placeholder="Password"
          onChange={(e) =>
            setSignupdata({ ...signupdata, password: e.nativeEvent.text })
          }
        />
        <Input
          placeholder="Confirm Password"
          onChange={(e) =>
            setSignupdata({
              ...signupdata,
              confirmpassword: e.nativeEvent.text,
            })
          }
        />
        <Button
          block
          onPress={
            signupdata.password === signupdata.confirmpassword
              ? onLogin
              : () => alert("Password and Confirm Password does not match")
          }
        >
          <Text color="white">Sign Up</Text>
        </Button>
      </Box>

      <Button onPress={() => navigation.navigate("Signin")}>
        <Text color="white">Back to sign in page</Text>
      </Button>
    </SafeAreaView>
  );
};

export default Signup;
