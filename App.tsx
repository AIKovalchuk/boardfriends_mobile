import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import React from "react";
import { AppStack } from "./src/router";
import { StatusBar } from "react-native";
import AuthProvider from "./src/provider/auth";
import EventProvider from "./src/provider/event";

const App: React.FC = () => {
  StatusBar.setBarStyle("light-content", true);
  return (
    <NavigationContainer>
      <AuthProvider>
        <EventProvider>
          <AppStack />
        </EventProvider>
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
