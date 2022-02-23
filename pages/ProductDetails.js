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
  const { cart, addToCart, removeFromCart } = useContext(UserContext);
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
        {cart.find((cartItem) => cartItem.id === item.id) ? (
          <Button
            onPress={() => removeFromCart(item)}
            bg="red.400"
            mt={4}
            mb={4}
            w="100%"
          >
            <Text color="white" bold>
              Remove from Cart
            </Text>
          </Button>
        ) : (
          <Button
            onPress={() => addToCart(item)}
            bg="green.400"
            mt={4}
            mb={4}
            w="100%"
          >
            <Text color="white" bold>
              Add to Cart
            </Text>
          </Button>
        )}
      </Box>
    </ScrollView>
  );
};

export default ProductDetails;
