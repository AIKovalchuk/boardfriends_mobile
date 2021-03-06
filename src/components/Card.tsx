import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Event from "../domain/Event";

type Props = {
  event: Event;
};

const EventCard: React.FC<Props> = ({ event }) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>{event.title}</Text>
        {/* TODO: Tags */}
      </View>
      <View style={styles.main}>
        <View style={styles.about}>
          <Text style={styles.text}>{"О событии: " + event.description}</Text>
        </View>
        <View style={styles.time}>
          <Text style={styles.text}>{event.time}</Text>
          {/* <Text style={styles.text}>{event.date}</Text> */}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    marginTop: 8,
    marginBottom: 8,
    padding: 10,
    minHeight: 60,
    maxHeight: 90,
    borderColor: "#F86624",
    borderWidth: 1,
    justifyContent: "space-between",

    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,

    // elevation: 5,
  },
  header: {},
  title: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 18,
    lineHeight: 21,

    color: "#000000",
  },
  main: {
    // flex: 1,
    flexDirection: "row",
    flexShrink: 1,
  },
  about: {
    flexBasis: "70%",
  },
  time: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  text: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 14,

    color: "#000000",
  },
});

export default EventCard;
