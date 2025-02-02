import React from "react";
import { View, StyleSheet, Text, TextInput, Button, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

export const RegisterScreen = () => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#25ad54", "#e2e2e2"]}
        style={styles.top}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 3 }}
      >
        <View style={styles.top}></View>
      </LinearGradient>
      <View style={styles.mid}>
        <Text style={styles.tex}>Nhập mật khẩu</Text>
        <View style={styles.mkinput}>
          <Ionicons name="lock-closed" size={24} color="green" />

          <TextInput
            style={styles.tinput}
            autoFocus={true}
            secureTextEntry={secureTextEntry}
            placeholder="Mật khẩu"
          />
          <Ionicons
            name="eye"
            size={24}
            color="green"
            onPress={() => setSecureTextEntry(!secureTextEntry)}
          />
        </View>

        <View style={styles.buttonView}>
          <View style={styles.button}>
            <Button
              title="Đăng Nhập"
              onPress={() => {
                navigation.replace("inApp");
              }}
              color={"white"}
            />
          </View>

          <Text style={styles.text}>Hoặc</Text>
          <View style={styles.button}>
            <Button
              title="Mã OTP"
              onPress={() => {
                Alert.alert("OPT");
              }}
              color={"white"}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  top: {
    width: "100%",
    height: "40%",
    top: -50,
  },
  mid: {
    width: "80%",
    height: "40%",
    backgroundColor: "white",
    top: -150,
    // borderWidth: 1,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
  },
  mkinput: {
    flexDirection: "row",
    width: "80%",
    height: "20%",
    borderWidth: 1,
    borderRadius: 10,
    top: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  tinput: {
    width: "80%",
    height: "100%",
    padding: 10,
    // borderWidth: 1,
    // borderRadius: 10,
  },
  tex: {
    fontSize: 20,
    fontWeight: "bold",
    top: 50,
  },
  text: {
    fontSize: 16,

    margin: 10,
  },
  buttonView: {
    flexDirection: "row",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    // margin: 10,
  },
  button: {
    width: "30%",
    height: "20%",
    borderRadius: "20%",
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    fontWeight: "bold",
  },
});
