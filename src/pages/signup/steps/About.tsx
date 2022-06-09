import React from "react";
import { StyleSheet, View } from "react-native";
import Button from "../../../components/button";
import Input from "../../../components/input";

type Props = {
  nextStep: () => void;
};

const About: React.FC<Props> = ({ nextStep }) => {
  return (
    <View style={styles.inputs}>
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
      <Button title="Зарегистрироваться" onPress={nextStep} />
    </View>
  );
};

export default About;

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
