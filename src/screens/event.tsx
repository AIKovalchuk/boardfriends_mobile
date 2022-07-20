import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { EventContext } from "../provider/event";
import Event from "../domain/Event";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { EventStackParamList } from "../router/event";

type Props = NativeStackScreenProps<EventStackParamList, "Event">;

const EventScreen: React.FC<Props> = ({ route }) => {
  const { getEvent } = React.useContext(EventContext);
  const [event, setEvent] = React.useState<Event>();
  const eventId = route.params.eventId;

  const loadEvent = async () => {
    const e = await getEvent(eventId);
    setEvent(e);
  };

  React.useEffect(() => {
    loadEvent();
  }, [eventId]);

  if (!event) {
    return (
      <View>
        <Text>{"Грузим..."}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        <Text style={styles.text}>{event.title}</Text>
        <Text style={styles.text}>{event.description}</Text>
      </View>
    </SafeAreaView>
  );
};

export default EventScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "stretch",
    flexDirection: "column",
  },
  text: {
    color: "#000",
    fontSize: 14,
  },
});
