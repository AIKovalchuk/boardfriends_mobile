import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Input from "../components/input";
import EventList from "../components/eventsList";
import Event from "../domain/Event";

const HomeScreen: React.FC = () => {
  const [query, setQuery] = React.useState<string>();
  const [events, setEvents] = React.useState<Event[]>([]);

  const loadData = async () => {
    const events$: Event[] = await fetch(
      "http://13.38.229.216:5000/api/events",
      {
        method: "GET",
      },
    ).then(res => res.json());
    setEvents(events$);
  };

  React.useEffect(() => {
    loadData();
  }, []);
  return (
    <View style={styles.container}>
      <Input
        placeholder="Печатать тут..."
        value={query}
        onChangeText={setQuery}
      />
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
