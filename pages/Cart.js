import React, { useContext, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Box,
  Heading,
  FlatList,
  Text,
  Button,
  View,
  Row,
  Image,
  ScrollView,
} from "native-base";
import { UserContext } from "../state/user";
import db from "../firebaseconfig";

const Cart = () => {
  const { user } = useContext(UserContext);
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

  const removeFromCart = (id) => {
    db.collection("cart").doc(user).collection("items").doc(id).delete();
  };

  const order = () => {
    db.collection("orders").doc(user).collection("orders").add({
      cart: cart,
    });
    db.collection("cart")
      .doc(user)
      .collection("items")
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          doc.ref.delete();
          alert("Order Placed");
        });
      });
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <Box p={4}>
          <Text bold>Cart</Text>
          <Text>{user}</Text>
          <FlatList
            data={cart}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View>
                <Box
                  bg="white"
                  p="2"
                  borderRadius="lg"
                  m="5"
                  p="5"
                  flexDirection="row"
                  justifyContent="space-between"
                >
                  <View>
                    <Text>{item.name}</Text>
                    <Text>{item.price}</Text>
                    <Image
                      style={{
                        width: 100,
                        height: 100,
                        borderRadius: 10,
                      }}
                      source={{ uri: item.image }}
                    />

                    <Text> Quantity: {item.quantity}</Text>
                    <Button
                      p="4"
                      px="6"
                      colorScheme="red"
                      onPress={() => {
                        removeFromCart(item.id);
                      }}
                    >
                      Remove
                    </Button>
                  </View>
                </Box>
              </View>
            )}
          />
          <Text>
            Total:
            {cart.reduce((acc, item) => {
              return acc + item.price;
            }, 0)}
          </Text>
          <Button
            disabled={cart.length === 0}
            p="4"
            px="6"
            colorScheme="red"
            onPress={order}
          >
            Order
          </Button>
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Cart;
