import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import {
  CompositeNavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import {
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  StyleSheet,
  ListRenderItem,
} from "react-native";
import Event from "../domain/Event";
import { RootStackParamList } from "../router";
import { EventStackParamList } from "../router/event";
import EventCard from "./card";

type Props = {
  events: Event[];
};

type EventScreen = CompositeNavigationProp<
  BottomTabNavigationProp<RootStackParamList, "Home">,
  NativeStackNavigationProp<EventStackParamList, "Event">
>;

const EventList: React.FC<Props> = ({ events }) => {
  const nav = useNavigation<EventScreen>();

  const openEvent = (id: number) => {
    nav.navigate("Event", { eventId: id });
  };

  const renderItem: ListRenderItem<Event> = event => {
    return (
      <TouchableOpacity onPress={() => openEvent(event.item.id)}>
        <EventCard event={event.item} />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={events}
        renderItem={renderItem}
        keyExtractor={item => String(item.id)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "stretch",
    flexDirection: "column",
  },
});

export default EventList;
