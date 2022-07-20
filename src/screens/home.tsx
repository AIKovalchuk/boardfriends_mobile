import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Input from "../components/input";
import EventList from "../components/eventsList";
import Event from "../domain/Event";
import { useFocusEffect } from "@react-navigation/native";
import EventService from "../service/event";

const HomeScreen: React.FC = () => {
  const eventService = React.useMemo(() => new EventService(), []);
  const [query, setQuery] = React.useState<string>();
  const [events, setEvents] = React.useState<Event[]>([]);

  const loadData = async () => {
    const events$ = await eventService.getAllEvents();
    console.log("DEBUG", events$);
    setEvents(events$);
  };

  useFocusEffect(
    React.useCallback(() => {
      loadData();
    }, []),
  );

  return (
    <View style={styles.container}>
      <EventList events={events} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "stretch",
    flexDirection: "column",
    padding: 12,
  },
});
