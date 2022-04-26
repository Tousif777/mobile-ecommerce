import React, { useContext } from "react";
import { Box, Button, Image, Text, View } from "native-base";
import { UserContext } from "../state/user";
import { Pressable } from "react-native";

const SingleCartProduct = ({ item }) => {
  const { removeFromCart } = useContext(UserContext);
  return (
    <View>
      <Box
        keyExtractor={(item, index) => item + index.toString()}
        mt="10"
        m="4"
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
          <Text></Text>
        </View>
        <View>
          <Button>+</Button>
        </View>
        <View>
          <Button
            onPress={() => {
              removeFromCart(item);
            }}
          >
            Remove
          </Button>
        </View>
      </Box>
    </View>
  );
};

export default SingleCartProduct;
