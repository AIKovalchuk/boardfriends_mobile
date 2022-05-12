import React from "react";
import {
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  StyleSheet,
  ListRenderItem,
} from "react-native";
import Event from "../domain/Event";
import EventCard from "./card";
import { useHistory } from "react-router";

type Props = {
  events: Event[];
};

const EventList: React.FC<Props> = ({ events }) => {
  const history = useHistory();

  const openEvent = (id: number) => {
    history.push(`/event/${id}`);
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
