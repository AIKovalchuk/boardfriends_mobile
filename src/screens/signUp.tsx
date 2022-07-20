import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { RootStackParamList } from "../router";
import { COLORS, FONTWIGHT } from "../constants/theme";
import Input from "../components/input";
import Button from "../components/button";
import { AuthContext } from "../provider/auth";
import IUserCreate from "../models/IUserCreate";

type Props = DrawerScreenProps<RootStackParamList, "SignUp">;

const SignUpScreen: React.FC<Props> = ({ navigation }) => {
  const { register } = React.useContext(AuthContext);

  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [firstName, setFirstName] = React.useState<string>("");
  const [lastName, setLastName] = React.useState<string>("");
  const [about, setAbout] = React.useState<string>("");
  const [cityId, setCityId] = React.useState<number>(2);

  const onSignUp = () => navigation.navigate("SignIn", undefined);

  const handleSubmit = async () => {
    const data: IUserCreate = {
      email,
      password,
      firstName,
      lastName,
      about,
      cityId,
    };

    await register(data);
    navigation.navigate("Home", undefined);
  };

  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.text_header}>Присоединяйся!</Text>
      </View>
      <View style={styles.footer}>
        <ScrollView style={styles.scroll}>
          <Input label="Имя" value={firstName} onChangeText={setFirstName} />
          <Input label="Фамилия" value={lastName} onChangeText={setLastName} />
          <Input label="О себе" value={about} onChangeText={setAbout} />
          <Input label="Email" value={email} onChangeText={setEmail} />
          <Input label="Пароль" value={password} onChangeText={setPassword} />

          <Button title="Зарегистрироваться" onPress={handleSubmit} />
          <Button title="Войти" onPress={onSignUp} />
        </ScrollView>
      </View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  text_header: {
    color: COLORS.white,
    fontWeight: FONTWIGHT.bold,
    fontSize: 30, // TODO
  },
  footer: {
    flex: 3,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 30,
  },
  scroll: {
    paddingHorizontal: 20,
  },
});
