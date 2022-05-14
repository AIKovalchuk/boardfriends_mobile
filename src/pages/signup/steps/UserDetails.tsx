import React from "react";
import { StyleSheet, View } from "react-native";
import Button from "../../../components/button";
import Input from "../../../components/input";

type Props = {
  nextStep: () => void;
};

const UserDetails: React.FC<Props> = ({ nextStep }) => {
  return (
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
      <Button title="Далее" onPress={nextStep} />
    </View>
  );
};

export default UserDetails;

const styles = StyleSheet.create({
  inputs: {
    marginLeft: 18,
    marginRight: 18,
  },
  input: {
    marginBottom: 24,
  },
});
