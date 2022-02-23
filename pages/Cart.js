import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Box,
  Heading,
  ScrollView,
  Text,
  Image,
  Button,
  View,
  FlatList,
} from "native-base";
import { UserContext } from "../state/user";

const Cart = () => {
  const { cart } = useContext(UserContext);
  return (
    <SafeAreaView>
      <ScrollView>
        <Heading mt="4" ml="4">
          Cart Items
        </Heading>
        <FlatList
          data={cart}
          renderItem={({ item }) => (
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
                  source={{ uri: item.image }}
                />
              </View>
              <View>
                <Text bold>{item.title.substring(0, 10)}</Text>
                <Text bold>{item.price}</Text>
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
          )}
        />
        <Box>
          <Text mt={6} ml={6} bold>
            Total:{" "}
            {cart.reduce((acc, item) => {
              return acc + item.price;
            }, 0)}
          </Text>
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Cart;
