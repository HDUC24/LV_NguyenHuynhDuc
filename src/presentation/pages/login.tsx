import React from "react";
import { Button, Text } from "react-native";
import { View, TextInput, StyleSheet } from "react-native";
export const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text> Phe Lieu </Text>
      <View style={{ width: 200 }}>
        <Text> Tài Khoản</Text>
        <TextInput placeholder="Tài khoản"></TextInput>
        <Text> Mật Khẩu</Text>
        <TextInput placeholder="Mật Khẩu"></TextInput>
        <View style={{ marginTop: 10, width: 200,
          <Button title="Login" onPress={() => {}} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
