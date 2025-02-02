import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ProfileScreen } from "../pages/profile";
import { LoginScreen } from "../pages/login";
import { HomeScreen } from "../pages/home";
import { RegisterScreen } from "../pages/register";
import { LichSuScreen } from "../pages/lichsu";
import { ThongbaoScreen } from "../pages/thongbao";
import { ScanScreen } from "../pages/scan";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="auth" component={AuthNavigation} />
        <Stack.Screen name="inApp" component={InApp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const AuthNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="check" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

const InApp = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "thongbao") {
            iconName = focused ? "notifications" : "notifications-outline";
          } else if (route.name === "scan") {
            iconName = focused ? "qr-code" : "qr-code-outline";
          } else if (route.name === "history") {
            iconName = focused ? "time" : "time-outline";
          } else if (route.name === "profile") {
            iconName = focused ? "person" : "person-outline";
          }
          return <Ionicons name={iconName} size={20} color={color} />;
        },
        tabBarActtiveTintColor: "green",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      })}
    >
      <Tab.Screen name="home" component={HomeScreen} />
      <Tab.Screen name="thongbao" component={ThongbaoScreen} />
      <Tab.Screen name="scan" component={ScanScreen} />
      <Tab.Screen name="history" component={LichSuScreen} />
      <Tab.Screen name="profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};
