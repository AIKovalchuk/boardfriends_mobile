import React from "react";
import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";

const person = {
  firstName: "Александр",
  secondName: "Ковальчук",
  photo:
    "https://feminissimo.ru/core/fileman/Uploads/%D0%BE%D1%82%D0%BD%D0%BE%D1%88%D0%B5%D0%BD%D0%B8%D1%8F/%D0%BC%D1%83%D0%B6%D1%87%D0%B8%D0%BD%D0%B0%20%D0%BB%D0%B8%D0%B4%D0%B5%D1%80/uverennost_v_muzhchine_0.jpg",
  registredAt: "22.04.2022",
  city: "Нижний Новгород",
  age: "23",
  about:
    "Всем привет! Я айтишник, в свободное время люблю поиграть в настольные игры. Одни из любимых игры это Грааль и Серп.",
};

const ProfilePage: React.FC = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.page}>
        <View style={styles.head}>
          <View style={styles.bio}>
            <Text style={styles.name}>
              {person.firstName + " " + person.secondName}
            </Text>
            <Text style={styles.detailed}>
              {person.city + ", " + person.age + " лет"}
            </Text>
            <Text style={styles.sub_info}>
              {"Зарегестрирован: " + person.registredAt}
            </Text>
            <Text style={styles.sub_info}>{"Город: " + person.city}</Text>
          </View>
          <View style={styles.photo}>
            <Image
              style={styles.photo_image}
              source={{
                uri: person.photo,
              }}
            />
          </View>
        </View>
        <View style={styles.about}>
          <Text style={styles.about_text}>{"О себе:"}</Text>
          <Text style={styles.about_text}>{person.about}</Text>
        </View>
        <View style={styles.events}>
          <Text>{"Вы записаны"}</Text>
          {}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfilePage;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  page: {
    padding: 18,
  },
  head: {
    flexDirection: "row",
    alignItems: "stretch",
  },
  bio: {
    flexGrow: 3,
  },
  name: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 20,
    lineHeight: 23,
    color: "#000",
  },
  detailed: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 16,
    marginBottom: 4,
  },
  sub_info: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 15,
    lineHeight: 18,
    color: "#000",

    marginBottom: 4,
    marginTop: 4,
  },
  photo: {
    flexGrow: 1,
    alignItems: "stretch",
  },
  photo_image: {
    width: 120,
    height: 120,
    resizeMode: "cover",
    borderRadius: 100,
  },
  about: {},
  about_text: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 15,
    lineHeight: 18,
    color: "#000",
  },
  events: {},
});
