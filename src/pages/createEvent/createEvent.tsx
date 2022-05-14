import React from "react";
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import Button from "../../components/button";
import Input from "../../components/input";

const CreateEventPage: React.FC = () => {
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
            onChange={() => undefined}
          />
          <Input
            style={styles.input}
            label="Адрес"
            placeholder="Введите адрес..."
            onChange={() => undefined}
          />
          <Input
            style={styles.input}
            label="Дата"
            placeholder="Введите адрес..."
            onChange={() => undefined}
          />

          <Input
            style={styles.input}
            label="Время"
            placeholder="Введите адрес..."
            onChange={() => undefined}
          />
          <Input
            style={styles.input}
            label="Количество участников"
            placeholder="Введите адрес..."
            onChange={() => undefined}
          />
          <Input
            style={styles.input}
            label="О мероприятие"
            placeholder="Расскажите подробнее о вашем мероприятии"
            onChange={() => undefined}
          />
          <Button title="Создать" />
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
