import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { useHistory } from "react-router-native";
import Button from "../../components/button";
import Input from "../../components/input";
import About from "./steps/About";
import PersonalDetails from "./steps/PersonalDetails";
import UserDetails from "./steps/UserDetails";

const SignUpPage: React.FC = () => {
  const [first_name, setFirstName] = React.useState<string>("");
  const [second_name, setSecondName] = React.useState<string>("");
  const [city_name, setCityName] = React.useState<string>("");
  const [address, setAdress] = React.useState<string>("");
  const [birth_day, setBirthDay] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [comment, setComment] = React.useState<string>("");

  const history = useHistory();
  const [step, setStep] = React.useState<number>(1);

  const nextStep = () => setStep(prev => prev + 1);

  const onSubmit = async () => {
    const data = {
      first_name,
      second_name,
      city_name,
      birth_day,
      password,
      email,
      comment,
    };

    const answer = await fetch("http://13.38.229.216:5000/api/persons", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then<Event>(res => res.json())
      .catch(err => console.log(err));

    history.push(`/profile/${answer?.id}`);
  };

  const auth = () => {
    history.push("/profile");
  };

  const getStep = () => {
    switch (step) {
      case 1:
        return <UserDetails nextStep={nextStep} />;
      case 2:
        return <PersonalDetails nextStep={nextStep} />;
      case 3:
        return <About nextStep={auth} />;
      default:
        return <View></View>;
    }
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.page}>
        <View style={styles.logo}>
          <Text style={styles.logo_text}>{"BoardFriends"}</Text>
        </View>
        <ScrollView style={styles.scroll}>
          <Input
            style={styles.input}
            label="Почта"
            placeholder="Введите почту..."
            keyboardType="email-address"
            onChangeText={setEmail}
          />
          <Input
            style={styles.input}
            label="Пароль"
            placeholder="Введите пароль..."
            onChangeText={setPassword}
          />
          {/* <Input
            style={styles.input}
            label="Подтвердите пароль"
            placeholder="Введите пароль..."
            onChange={() => undefined}
          /> */}
          <Input
            style={styles.input}
            label="Имя"
            placeholder="Введите имя..."
            onChangeText={setFirstName}
          />
          <Input
            style={styles.input}
            label="Фамилия"
            placeholder="Введите фамилию..."
            onChangeText={setSecondName}
          />
          <Input
            style={styles.input}
            label="День рождения"
            placeholder="Введите день рожднния..."
            onChangeText={setBirthDay}
          />
          <Input
            style={styles.input}
            label="Город"
            placeholder="Введите ваш город..."
            onChangeText={setCityName}
          />
          <Input
            style={styles.input}
            label="О себе"
            placeholder="Расскажите немного о себе..."
            onChangeText={setComment}
          />
          <Button title="Зарегистрироваться" onPress={onSubmit} />
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
  scroll: {
    marginLeft: 18,
    marginRight: 18,
  },
  page: {
    flex: 1,
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
  input: {
    marginBottom: 24,
    // marginLeft: 18,
    // marginRight: 18,
  },
});
