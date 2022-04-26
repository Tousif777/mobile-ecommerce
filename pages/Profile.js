import { Avatar, Box, Button, Input, Text, View } from "native-base";
import React, { useContext, useEffect, useState } from "react";
import db from "../firebaseconfig";
import { UserContext } from "../state/user";

const Profile = () => {
  const { logout, user } = useContext(UserContext);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    db.collection("cart")
      .doc(user)
      .collection("items")
      .onSnapshot((snapshot) => {
        const newCart = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCart(newCart);
      });
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Avatar h="150" w="150">
        SS
      </Avatar>
      <Text fontSize="xl" bold mt="1.5">
        {user}
      </Text>
      <View flexDirection="row" justifyContent="space-around">
        <Box bg="white" p="2" borderRadius="lg" m="5" p="5">
          <Text bold>Active order : 2</Text>
        </Box>
        <Box bg="white" p="2" borderRadius="lg" m="5" p="5">
          <Text bold>Cart Items : {cart.length}</Text>
        </Box>
      </View>
      <Button p="4" px="6" colorScheme="red" onPress={() => logout()}>
        Log out
      </Button>
    </View>
  );
};

export default Profile;
