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
import db from "../firebaseconfig";

const Home = ({ navigation }) => {
  const [searchlist, setSearchlist] = useState([]);
  const [products, setProducts] = useState([]);
  const [newitems, setNewitems] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    db.collection("products")
      .get()
      .then((snapshot) => {
        const newProducts = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(newProducts);
      });
  }, []);

  const searchProduct = (text) => {
    setSearch(text);
    const newSearchlist = products.filter((product) => {
      return product.name.toLowerCase().includes(text.toLowerCase());
    });
    setSearchlist(newSearchlist);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <Input
          m={3}
          placeholder="Search"
          value={search}
          onChangeText={(text) => setSearch(text)}
          variant="rounded"
          InputLeftElement={
            <MaterialCommunityIcons
              style={{ marginLeft: 10 }}
              name="database-search"
              size={24}
              color="black"
              onPress={() => {
                searchProduct(search);
              }}
            />
          }
        />
        <View>
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

          {searchlist.length > 0 ? (
            <>
              <Heading ml="6" m="3">
                Search Results
              </Heading>
              <FlatList
                mb="6"
                data={searchlist}
                ml="4"
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                  <Box
                    onTouchEnd={() => {
                      navigation.navigate("ProductDetails", {
                        item,
                      });
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
                      <Text fontSize="14" bold>
                        {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                      </Text>
                      <Text fontSize="14" color="gray.600">
                        {
                          //tille will be 10 charachters
                          item.name.length > 20
                            ? item.title.substring(0, 10) + "..."
                            : item.title
                        }
                      </Text>
                      <Text fontSize="10">Price: {item.price}</Text>
                    </View>
                  </Box>
                )}
              />
            </>
          ) : (
            <>
              <View>
                <Heading ml="6" m="3">
                  All Items
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
                        navigation.navigate("ProductDetails", {
                          item,
                        });
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
                        <Text fontSize="14" bold>
                          {item.name.charAt(0).toUpperCase() +
                            item.name.slice(1)}
                        </Text>
                        <Text fontSize="14" color="gray.600">
                          {
                            //tille will be 10 charachters
                            item.name.length > 20
                              ? item.title.substring(0, 10) + "..."
                              : item.title
                          }
                        </Text>
                        <Text fontSize="10">Price: {item.price}</Text>
                      </View>
                    </Box>
                  )}
                />
              </View>
            </>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
