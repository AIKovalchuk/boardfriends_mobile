import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SignInScreen, SignUpScreen } from "../screens";
import ProfileScreen from "../screens/profile";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthContext } from "../provider/auth";

export type ProfileStackParamList = {
  User: { userId: number };
  Profile: undefined;
  SignIn: undefined;
  SignUp: undefined;
};

const ProfileStack = createNativeStackNavigator<ProfileStackParamList>();

const ProfileRouter: React.FC = () => {
  const { isSignIn } = React.useContext(AuthContext);

  const isLogin = isSignIn();

  return (
    <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
      {isLogin ? (
        <ProfileStack.Group>
          <ProfileStack.Screen
            name="User"
            component={ProfileScreen}
            options={{
              title: "Пользователь",
            }}
          />
          <ProfileStack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              title: "Профиль",
            }}
          />
        </ProfileStack.Group>
      ) : (
        <ProfileStack.Group>
          <ProfileStack.Screen
            name="SignIn"
            component={SignInScreen}
            options={{ title: "Войти" }}
          />
          <ProfileStack.Screen
            name="SignUp"
            component={SignUpScreen}
            options={{
              title: "Зарегистрироваться",
            }}
          />
        </ProfileStack.Group>
      )}
    </ProfileStack.Navigator>
  );
};

export default ProfileRouter;
