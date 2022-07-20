import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { Drawer } from "../components/drawer";
import { AuthContext } from "../provider/auth";
import { HomeScreen, SignInScreen, SignUpScreen } from "../screens";
import EventScreen from "../screens/event";
import ProfileScreen from "../screens/profile";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialIcons";
import ProfileRouter from "./profile";
import { COLORS } from "../constants/theme";
import CreateEventScreen from "../screens/create";
import EventStack from "./event";

export type RootStackParamList = {
  Home: undefined;
  Create: undefined;
  Users: undefined;
  Settings: undefined;
};

const HomeStack = createBottomTabNavigator<RootStackParamList>();

const AppStack: React.FC = () => {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{ tabBarActiveTintColor: COLORS.primary }}>
      <HomeStack.Screen
        name="Home"
        component={EventStack}
        options={{
          title: "Главная",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <HomeStack.Screen
        name="Create"
        component={CreateEventScreen}
        options={{
          title: "Создать событие",
          tabBarIcon: ({ color, size }) => (
            <Icon name="add" size={size} color={color} />
          ),
        }}
      />
      <HomeStack.Screen
        name="Users"
        component={ProfileRouter}
        options={{
          title: "Профиль",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="person" size={size} color={color} />
          ),
        }}
      />
      {/* <HomeStack.Screen
        name="Settings"
        component={HomeScreen}
        options={{ title: "Настройки" }}
      /> */}
    </HomeStack.Navigator>
  );
};

export default AppStack;
