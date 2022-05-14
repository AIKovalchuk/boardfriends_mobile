import React from "react";
import { StyleSheet, View } from "react-native";
import Button from "../../../components/button";
import Input from "../../../components/input";

type Props = {
  nextStep: () => void;
};

const PersonalDetails: React.FC<Props> = ({ nextStep }) => {
  return (
    <View style={styles.inputs}>
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
      <Button title="Далее" onPress={nextStep} />
    </View>
  );
};

export default PersonalDetails;

const styles = StyleSheet.create({
  inputs: {
    marginLeft: 18,
    marginRight: 18,
  },
  input: {
    marginBottom: 24,
  },
});
