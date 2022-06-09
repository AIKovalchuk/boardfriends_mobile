import React from "react";
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import { useHistory } from "react-router-native";
import Button from "../../components/button";
import Input from "../../components/input";
import Event from "../../domain/Event";

const CreateEventPage: React.FC = () => {
  const history = useHistory();
  const [name, setName] = React.useState<string>();
  const [place, setPlace] = React.useState<string>();
  const [creator_id, setCreatorId] = React.useState<string>(
    "781eee9d-2159-4afd-8ba5-948b3b2cb677",
  );
  const [time, setTime] = React.useState<string>();
  const [max_player, setMaxPlayer] = React.useState<number>();
  const [comment, setComment] = React.useState<string>();

  const onSubmit = async () => {
    const data = {
      name,
      place,
      creator_id,
      time,
      max_player,
      comment,
    };

    const answer = await fetch("http://13.38.229.216:5000/api/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then<Event>(res => res.json())
      .catch(err => console.log(err));

    history.push(`/event/${answer?.id}`);
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView style={styles.page}>
        <View style={styles.logo}>
          <Text style={styles.logo_text}>{"BoardFriends"}</Text>
        </View>
        <View style={styles.form}>
          <Input
            style={styles.input}
            label="Название"
            placeholder="Введите название события..."
            onChangeText={setName}
          />
          <Input
            style={styles.input}
            label="Адрес"
            placeholder="Введите адрес..."
            onChangeText={setPlace}
          />
          <Input
            style={styles.input}
            label="Дата"
            placeholder="Введите дату..."
            onChangeText={setTime}
          />

          {/* <Input
            style={styles.input}
            label="Время"
            placeholder="Введите время..."
            onChangeText={() => undefined}
          /> */}
          <Input
            style={styles.input}
            label="Количество участников"
            placeholder="Введите кол-во участников..."
            keyboardType="numeric"
            onChangeText={e => setMaxPlayer(Number(e))}
          />
          <Input
            style={styles.input}
            label="О мероприятие"
            placeholder="Расскажите подробнее о вашем мероприятии"
            multiline
            numberOfLines={4}
            onChangeText={setComment}
          />
          <Button title="Создать" onPress={onSubmit} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateEventPage;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  page: {
    // flex: 1,
    // justifyContent: "space-between",
    // backgroundColor: "red",
  },
  logo: {
    justifyContent: "center",
    alignContent: "center",
    flexBasis: "25%",
  },
  logo_text: {
    fontFamily: "Ubuntu",
    fontWeight: "700",
    fontSize: 42,
    lineHeight: 52,
    textAlign: "center",
    color: "#000",
  },
  form: {
    margin: 18,
  },
  input: {
    marginBottom: 24,
  },
});
