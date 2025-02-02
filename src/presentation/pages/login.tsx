import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  Alert,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
export const LoginScreen = () => {
  const Navigation = useNavigation();
  return (
    // <SafeAreaView>
    <View style={styles.container}>
      <View style={[styles.box, { width: "100%", height: "60%" }]}>
        <LinearGradient
          colors={["#25ad54", "#e2e2e2"]}
          style={styles.top}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: -2 }}
        >
          <View style={styles.top}>
            <Text style={styles.texttop}> VeCa</Text>
            <Text style={styles.texttop1}> Chào mừng bạn đến với VeCa</Text>
            <Text style={styles.texttop1}>
              VeCa dành cho người bán ve chai, phế liệu
            </Text>
            <Text style={styles.texttop1}>
              Đặt lịch bán ve chai ngay bây giờ
            </Text>
          </View>
        </LinearGradient>
      </View>
      <View
        style={[
          styles.box,
          {
            // backgroundColor: "red",
            width: "80%",
            height: "55%",
            // top: 250,
            position: "relative",
          },
        ]}
      >
        <View style={styles.log}>
          <View style={{ margin: 10 }}>
            <Text> Đăng nhập bằng số điện thoại</Text>
          </View>

          <View style={styles.sdt}>
            <TextInput placeholder="số điện thoại"> </TextInput>
          </View>
          <View style={styles.logbutton}>
            <Button
              title=" Đăng nhập "
              onPress={() => {
                (Navigation as any).navigate("check");
              }}
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
    // {/* </SafeAreaView> */}
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    // backgroundColor: "yellow",
  },
  texttop1: {
    color: "white",
    fontSize: 20,
    // top: -90,
    padding: 5,
  },
  texttop: {
    color: "white",
    fontSize: 50,
    fontWeight: "bold",
    fontStyle: "italic",
    // top: -120,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
  },
  top: {
    borderBottomEndRadius: 60,
    borderBottomStartRadius: 60,
    // backgroundColor: "green",
    width: "100%",
    height: "100%",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  log: {
    backgroundColor: "white",
    marginTop: "-40%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
  },
  sdt: {
    // backgroundColor: "red",
    width: "80%",
    height: 50,
    borderRadius: 10,
    borderWidth: 2,
    color: "green",
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  logbutton: {
    width: "40%",
    height: "20%",
    borderRadius: "20%",
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
