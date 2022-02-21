import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Box,
  Heading,
  ScrollView,
  Text,
  Image,
  Button,
  View,
} from "native-base";

const Cart = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Heading mt="4" ml="4">
          Cart Items
        </Heading>
        <Box
          mt="10"
          m="4"
          flexDirection="row"
          justifyContent="space-around"
          alignItems="center"
        >
          <View>
            <Image
              alt="cart"
              borderRadius="2xl"
              h="12"
              w="10"
              source={{ uri: "https://picsum.photos/200/300" }}
            />
          </View>
          <View>
            <Text bold>Product Name</Text>
            <Text bold>Price: $10</Text>
          </View>
          <View>
            <Button>-</Button>
          </View>
          <View>
            <Text>1</Text>
          </View>
          <View>
            <Button>+</Button>
          </View>
          <View>
            <Button bg="red.400">
              <Text color="white" bold>
                Remove
              </Text>
            </Button>
          </View>
        </Box>
        <Box>
          <Text mt={6} ml={6} bold>
            Total: $10
          </Text>
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Cart;
