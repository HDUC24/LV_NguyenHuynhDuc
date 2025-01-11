import React from "react";
import { View, StyleSheet, Text, TextInput, Button, Alert } from "react-native";

export const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, { width: "100%", height: "45%", top: -102 }]}>
        <View style={styles.top}>
          <Text> VeCa</Text>
        </View>
      </View>
      <View
        style={[
          styles.box,
          {
            backgroundColor: "red",
            width: "80%",
            height: "55%",
            top: 300,
            position: "absolute",
          },
        ]}
      >
        <View style={styles.log}>
          <Text> Đăng nhập bằng số điện thoại</Text>
          <View style={styles.sdt}>
            <TextInput placeholder="số điện thoại"> </TextInput>
          </View>
          <View style={styles.logbutton}>
            <Button
              title=" Đăng nhập "
              onPress={() => Alert.alert("Login")}
              color="white"
            />
            {/* <Text>Dang nhap</Text> */}
          </View>
          <View style={{ marginTop: 40 }}>
            <Text> Hãy bắt đầu khám phá bằng cách đăng nhập</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "yellow",
  },
  top: {
    borderBottomEndRadius: 60,
    borderBottomStartRadius: 60,

    color: "green",
    backgroundColor: "green",
    width: "100%",
    height: "100%",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  log: {
    backgroundColor: "white",
    padding: 10,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
  },
  sdt: {
    // backgroundColor: "red",
    width: "80%",
    height: 50,
    borderRadius: 10,
    borderWidth: 2,
    color: "green",
    borderColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
  logbutton: {
    width: "40%",
    height: "40%",
    borderRadius: "50%",
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    fontWeight: "bold",
  },
  box: {
    width: 100,
    height: 100,
    // margin: 10,
  },
});
