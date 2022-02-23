import {
  Box,
  Button,
  Center,
  Heading,
  Image,
  ScrollView,
  Text,
  View,
} from "native-base";
import React, { useContext } from "react";
import { UserContext } from "../state/user";

const ProductDetails = ({ navigation, route }) => {
  const { cart, addToCart, removeFromCart, isLoggedIn } =
    useContext(UserContext);
  const { item } = route.params;

  return (
    <ScrollView>
      <Box m={3} mt={16} p={6}>
        <Center>
          <Image
            source={{
              uri: item.image,
            }}
            alt="product"
            style={{
              flex: 1,
              width: "80%",
              height: 200,
            }}
          />
        </Center>
        <Heading my={3}>
          {item.title}-{item.id}
        </Heading>
        <Text bold>Price: {item.price}</Text>
        <Text my={2}> {item.description}</Text>
        {isLoggedIn ? (
          <Button
            p="4"
            px="6"
            colorScheme={
              cart.find((cartItem) => cartItem.id === item.id) ? "red" : "green"
            }
            onPress={() => {
              if (cart.find((cartItem) => cartItem.id === item.id)) {
                removeFromCart(item);
              } else {
                addToCart(item);
              }
            }}
          >
            {cart.find((cartItem) => cartItem.id === item.id)
              ? "Remove from cart"
              : "Add to cart"}
          </Button>
        ) : (
          <Button
            p="4"
            px="6"
            colorScheme="red"
            onPress={() => navigation.navigate("Login")}
          >
            Login to add to cart
          </Button>
        )}
      </Box>
    </ScrollView>
  );
};

export default ProductDetails;
