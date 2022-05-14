import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Link } from "react-router-native";
import Button from "../../components/button";
import Input from "../../components/input";

const LoginPage: React.FC = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.page}>
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
          <Button title="Войти" />
        </View>

        {/* Sub text for register */}
        <View style={styles.inviteToSignUp}>
          <Text style={styles.signUp_text}>{"Ещё нет аккаунта?"}&#32;</Text>
          <Link to="/signup">
            <Text>{"Зарегистрироваться"}</Text>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginPage;

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
  inviteToSignUp: {
    flexBasis: "30%",
    flexDirection: "row",
    alignSelf: "center",
    textAlign: "center",
    textAlignVertical: "center",
    // backgroundColor: "red",
  },
  signUp_text: {
    fontFamily: "Roboto",
    fontSize: 14,
    fontWeight: "300",
  },
});
