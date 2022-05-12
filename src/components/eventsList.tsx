import React from "react";
import { SafeAreaView, FlatList, StyleSheet, ListRenderItem } from "react-native";
import Event from "../domain/Event";
import EventCard from "./card";

type Props = {
  events: Event[];
}

const EventList: React.FC<Props> = ({ events }) => {

  const renderItem: ListRenderItem<Event> = (event) => {
    return <EventCard event={event.item} />
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={events}
        renderItem={renderItem}
        keyExtractor={item => String(item.id)}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: "stretch",
    flexDirection: 'column',
  }
})

export default EventList