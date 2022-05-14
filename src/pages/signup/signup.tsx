import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { useHistory } from "react-router-native";
import Button from "../../components/button";
import Input from "../../components/input";

const SignUpPage: React.FC = () => {
  const history = useHistory();

  const auth = () => {
    history.push("/profile");
  };
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.page}>
        <ScrollView>
          <View style={styles.logo}>
            <Text style={styles.logo_text}>{"BoardFriends"}</Text>
          </View>
          <View style={styles.inputs}>
            <Input
              style={styles.input}
              label="Почта"
              placeholder="Введите почту..."
              onChange={() => undefined}
            />
            <Input
              style={styles.input}
              label="Пароль"
              placeholder="Введите пароль..."
              onChange={() => undefined}
            />
            <Input
              style={styles.input}
              label="Подтвердите пароль"
              placeholder="Введите пароль..."
              onChange={() => undefined}
            />
            <Input
              style={styles.input}
              label="Имя"
              placeholder="Введите имя..."
              onChange={() => undefined}
            />
            <Input
              style={styles.input}
              label="Фамилия"
              placeholder="Введите фамилию..."
              onChange={() => undefined}
            />
            <Input
              style={styles.input}
              label="День рождения"
              placeholder="Введите день рожднния..."
              onChange={() => undefined}
            />
            <Input
              style={styles.input}
              label="Город"
              placeholder="Введите ваш город..."
              onChange={() => undefined}
            />
            <Input
              style={styles.input}
              label="Фото"
              placeholder="Введите почту..."
              onChange={() => undefined}
            />
            <Input
              style={styles.input}
              label="О себе"
              placeholder="Расскажите немного о себе..."
              onChange={() => undefined}
            />
            <Button title="Зарегестрироваться" onPress={auth} />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default SignUpPage;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  page: {
    flex: 1,
    justifyContent: "space-between",
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
  inputs: {
    marginLeft: 18,
    marginRight: 18,
  },
  input: {
    marginBottom: 24,
  },
});
