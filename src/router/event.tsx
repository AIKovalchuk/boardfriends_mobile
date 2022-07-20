import React from "react";
import { HomeScreen } from "../screens";
import EventScreen from "../screens/event";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export type EventStackParamList = {
  Home: undefined;
  Event: { eventId: number };
};

const EventStackNavigator = createNativeStackNavigator<EventStackParamList>();

const EventStack: React.FC = () => {
  return (
    <EventStackNavigator.Navigator initialRouteName="Home">
      <EventStackNavigator.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Главная",
        }}
      />
      <EventStackNavigator.Screen
        name="Event"
        component={EventScreen}
        options={{
          title: "Событие",
          headerShown: false,
        }}
      />
    </EventStackNavigator.Navigator>
  );
};

export default EventStack;
