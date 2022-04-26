import {
  Alert,
  Box,
  Button,
  Center,
  Heading,
  Image,
  ScrollView,
  Text,
  View,
} from "native-base";
import React, { useContext, useState } from "react";
import { UserContext } from "../state/user";
import db from "../firebaseconfig";

const ProductDetails = ({ navigation, route }) => {
  const { item } = route.params;
  const [quantity, setQuantity] = useState(1);
  const { user } = useContext(UserContext);

  const addToCart = () => {
    db.collection("cart")
      .doc(user)
      .collection("items")
      .add({
        product: item.id,
        quantity: quantity,
        image: item.image,
        price: item.price * quantity,
        name: item.name,
      });
    db.collection("products")
      .doc(item.id)
      .update({
        quantity: item.quantity - quantity,
      });
    alert("Added to cart");
  };

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
        <Heading my={3}>{item.name}</Heading>
        <Text bold>Price: {item.price}</Text>
        <Text my={2}> {item.title}</Text>
        <View
          mt={4}
          mb={4}
          flexDirection="row"
          justifyContent={"space-between"}
        >
          <Button
            disabled={item.quantity - quantity < 0 ? true : false}
            onPress={() => {
              setQuantity(quantity + 1);
            }}
          >
            +
          </Button>
          <Text>{quantity}</Text>
          <Button
            disabled={quantity === 1}
            onPress={() => {
              setQuantity(quantity - 1);
            }}
          >
            -
          </Button>
        </View>
        {item.quantity > 0 ? (
          <Button
            onPress={() => {
              addToCart();
            }}
          >
            Add to Cart
          </Button>
        ) : (
          <Button disabled>Out of Stock</Button>
        )}
      </Box>
    </ScrollView>
  );
};

export default ProductDetails;
