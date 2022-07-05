import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { Drawer } from "../components/drawer";
import { HomeScreen, SignInScreen, SignUpScreen } from "../screens";

export type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
  Settings: undefined;
  // Login: undefined;
  SignIn: undefined;
  SignUp: undefined;
  // Create: undefined;
  // Event: undefined;
};

const HomeStack = createDrawerNavigator<RootStackParamList>();

const AppStack: React.FC = () => {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      drawerContent={props => <Drawer {...props} />}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{ title: "Войти", headerShown: false }}
      />
      <HomeStack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{
          title: "Войти",
          headerShown: false,
          drawerItemStyle: {
            display: "none",
          },
        }}
      />
      <HomeStack.Screen
        name="Settings"
        component={HomeScreen}
        options={{ title: "Настройки" }}
      />
    </HomeStack.Navigator>
  );
};

export default AppStack;
