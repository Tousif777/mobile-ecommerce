import React, { useEffect, useState } from "react";
import {
  Box,
  FlatList,
  Heading,
  Image,
  Input,
  Text,
  View,
  ScrollView,
  Center,
} from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Touchable } from "react-native";

const Home = () => {
  const [searchlist, setSearchlist] = useState([]);
  const [products, setProducts] = useState([]);
  const [newitems, setNewitems] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
    fetch("https://fakestoreapi.com/products?sort=desc")
      .then((res) => res.json())
      .then((data) => setNewitems(data));
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <Input
          m={3}
          placeholder="Search"
          variant="rounded"
          InputLeftElement={
            <MaterialCommunityIcons
              style={{ marginLeft: 10 }}
              name="database-search"
              size={24}
              color="black"
              onPress={() => {
                alert("Search");
              }}
            />
          }
        />
        {searchlist.length > 0 ? (
          <FlatList
            data={searchlist}
            renderItem={({ item }) => (
              <View>
                <Image
                  source={{
                    uri: item.image,
                  }}
                  style={{ width: "100%", height: 200 }}
                />
                <Text>{item.name}</Text>
              </View>
            )}
          />
        ) : (
          <View>
            <Box m={3} ml={6}>
              <Heading>New Items</Heading>
            </Box>
            <FlatList
              data={newitems}
              ml="4"
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <Box
                  shadow="2"
                  borderRadius="2xl"
                  bg="coolGray.200"
                  mx="2.5"
                  h="56"
                  w="40"
                >
                  <Image
                    alt="item"
                    borderTopRadius="2xl"
                    w="100%"
                    h="65%"
                    source={{ uri: item.image }}
                  />
                  <View textAlign="center" p="3">
                    <Text fontSize="12" bold>
                      {item.title.substring(0, 30)}
                    </Text>
                    <Text fontSize="12">Price: {item.price}</Text>
                  </View>
                </Box>
              )}
            />
            <Center>
              <Image
                mt="5"
                alt="item"
                borderRadius="2xl"
                w="95%"
                h="100"
                source={{
                  uri: "https://media.istockphoto.com/photos/demo-sign-cubes-picture-id615422436?k=20&m=615422436&s=612x612&w=0&h=m-VHyxKGp3qdXyi_O5C1oxghcmbAegmb34VaD9n6v7c=",
                }}
              />
            </Center>

            <Heading ml="6" m="3">
              Popular Items
            </Heading>
            <FlatList
              mb="6"
              data={products}
              ml="4"
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <Box
                  onTouchEnd={() => {
                    alert(item.title);
                  }}
                  shadow="2"
                  borderRadius="2xl"
                  bg="coolGray.200"
                  mx="2.5"
                  h="56"
                  w="40"
                >
                  <Image
                    alt="item"
                    borderTopRadius="2xl"
                    w="100%"
                    h="65%"
                    source={{ uri: item.image }}
                  />
                  <View textAlign="center" p="3">
                    <Text fontSize="12" bold>
                      Name: {item.title.substring(0, 30)}
                    </Text>
                    <Text fontSize="10">Price: {item.price}</Text>
                  </View>
                </Box>
              )}
            />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
