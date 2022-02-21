import { Avatar, Box, Button, Input, Text, View } from "native-base";
import React, { useContext } from "react";
import { UserContext } from "../state/user";

const Profile = () => {
  const { logout } = useContext(UserContext);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Avatar
        h="150"
        w="150"
        source={{
          uri: "https://scontent.fjsr6-1.fna.fbcdn.net/v/t39.30808-1/271391057_2215207345294464_8149533860283895995_n.jpg?stp=dst-jpg_s200x200&_nc_cat=106&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeHMxle5MD8IZjyWaYMc2rkNmfaDSOWdi7mZ9oNI5Z2LuVoXeKEKQAxdkF-0gRX_QoBtd6Icgip1RcqY5c34E-wR&_nc_ohc=s9YdOIt1-uQAX8SApnT&_nc_ht=scontent.fjsr6-1.fna&oh=00_AT9XEXUwRxQ5e-EgJ2ygcCApmwJn1i8OcvxdFTJ3MLXnIw&oe=6217683E",
        }}
      >
        SS
      </Avatar>
      <Text fontSize="2xl" bold mt="1.5">
        Raz
      </Text>
      <View flexDirection="row" justifyContent="space-around">
        <Box bg="white" p="2" borderRadius="lg" m="5" p="5">
          <Text bold>Active order : 2</Text>
        </Box>
        <Box bg="white" p="2" borderRadius="lg" m="5" p="5">
          <Text bold>Cart Items : 2</Text>
        </Box>
      </View>
      <Button
        p="4"
        px="6"
        colorScheme="red"
        onPress={() => {
          logout();
        }}
      >
        Log out
      </Button>
    </View>
  );
};

export default Profile;
