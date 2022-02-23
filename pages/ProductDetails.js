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
import React from "react";

const ProductDetails = ({ navigation, route }) => {
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
        <Heading my={3}>{item.title}</Heading>
        <Text bold>Price: {item.price}</Text>
        <Text my={2}> {item.description}</Text>
        <Button mt={4}>
          <Text
            color={"white"}
            onPress={() => {
              alert("Add to cart");
            }}
          >
            Add to Cart
          </Text>
        </Button>
      </Box>
    </ScrollView>
  );
};

export default ProductDetails;
