import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, ScrollView, Image } from "react-native";
import axios from "axios";

export const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://example.com/api/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.top}></View>
      <View style={styles.mid}></View>
      <View style={styles.bot}>
        <ScrollView>
          <View style={styles.fl}>
            {products.map((product, index) => (
              <View key={index} style={styles.box}>
                <View style={styles.pic}>
                  <Image
                    source={{ uri: product.image }}
                    style={{ width: "100%", height: "100%" }}
                  />
                </View>
                <View style={styles.name}>
                  <Text>{product.name}</Text>
                  <Text>{product.price}</Text>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    height: "100%",
    backgroundColor: "red",
  },
  top: {
    flex: 2,
    backgroundColor: "blue",
    height: 100,
  },
  mid: {
    flex: 1,
    backgroundColor: "green",
  },
  bot: {
    flex: 3,
    backgroundColor: "yellow",
  },
  fl: {
    flexDirection: "row",
    alignContent: "space-around",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  pic: {
    height: 70,
    backgroundColor: "blue",
    margin: 5,
    borderRadius: 10,
  },
  name: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
  box: {
    height: 120,
    width: 100,
    borderWidth: 1,
    borderRadius: 10,
    margin: 10,
  },
});
