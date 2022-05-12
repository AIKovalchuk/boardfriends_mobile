import React from "react";
import { StyleSheet, View } from "react-native";
import EventList from "../../components/eventsList";
import Input from "../../components/input";
import Event from "../../domain/Event";

const events: Event[] = [
  {
    id: 1,
    title: "Название ивента",
    desc: "Хотим провести вечер настольных игр среди любителей. Против алкоголя",
    date: "21 марта 2022",
    time: "21:00",
  },
  {
    id: 2,
    title: "Название ивента 2",
    desc: "Хотим провести вечер настольных игр среди любителей. Против алкоголя",
    date: "21 марта 2022",
    time: "21:00",
  },
  {
    id: 3,
    title: "Название ивента 3",
    desc: "Хотим провести вечер настольных игр среди любителей. Против алкоголя",
    date: "21 марта 2022",
    time: "21:00",
  },
  {
    id: 4,
    title: "Название ивента 4",
    desc: "Хотим провести вечер настольных игр среди любителей. Против алкоголя",
    date: "21 марта 2022",
    time: "21:00",
  },
  {
    id: 5,
    title: "Название ивента 5",
    desc: "Хотим провести вечер настольных игр среди любителей. Против алкоголя",
    date: "21 марта 2022",
    time: "21:00",
  },
  {
    id: 6,
    title: "Название ивента 6",
    desc: "Хотим провести вечер настольных игр среди любителей. Против алкоголя",
    date: "21 марта 2022",
    time: "21:00",
  },
  {
    id: 7,
    title: "Название ивента 7",
    desc: "Хотим провести вечер настольных игр среди любителей. Против алкоголя",
    date: "21 марта 2022",
    time: "21:00",
  },
];

const SearchPage: React.FC = () => {
  const [query, setQuery] = React.useState<string>();
  return (
    <View style={styles.container}>
      <Input placeholder="Печатать тут..." value={query} onChange={setQuery} />
      <EventList events={events} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "stretch",
    flexDirection: "column",
    padding: 12,
  },
});

export default SearchPage;
