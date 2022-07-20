import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Input from "../components/input";
import Button from "../components/button";
import { COLORS, FONTWIGHT } from "../constants/theme";
import { AuthContext } from "../provider/auth";
import { RootStackParamList } from "../router";
import { DrawerScreenProps } from "@react-navigation/drawer";

type Props = DrawerScreenProps<RootStackParamList, "SignIn">;

const SignInScreen: React.FC<Props> = ({ navigation }) => {
  const { login } = React.useContext(AuthContext);

  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const onLogin = async () => {
    await login(email, password);
    navigation.navigate("Home", undefined);
  };

  const onSignUp = () => navigation.navigate("SignUp", undefined);

  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.text_header}>Добро пожаловать!</Text>
      </View>
      <View style={styles.footer}>
        <Input label="Email" value={email} onChangeText={setEmail} />
        <Input label="Password" value={password} onChangeText={setPassword} />
        <Button title="Войти" onPress={onLogin} />
        <Button title="Зарегистрироваться" onPress={onSignUp} />
      </View>
    </View>
  );
};

export default SignInScreen;

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
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
});
