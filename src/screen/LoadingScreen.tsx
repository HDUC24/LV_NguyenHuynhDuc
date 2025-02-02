import { ActivityIndicator, Image, View } from "react-native";
import React from "react";
import { AppInfo } from "../contants/AppInfor";
import { LoadingComponent } from "../components";
import { AppColors } from "../contants/AppColors";
const LoadingScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <Image
        source={require("../../assets/hinh/thu-mua-ve-chai.jpg")}
        style={{
          width: AppInfo.sizes.WIDTH * 0.8,
          // height: "auto",
          resizeMode: "cover",
        }}
      />
      <LoadingComponent height={20} />
      <ActivityIndicator color={AppColors.gray} size={22} />
    </View>
  );
};

export default LoadingScreen;
