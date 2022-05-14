import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useHistory } from "react-router-native";
import About from "./steps/About";
import PersonalDetails from "./steps/PersonalDetails";
import UserDetails from "./steps/UserDetails";

const SignUpPage: React.FC = () => {
  const history = useHistory();
  const [step, setStep] = React.useState<number>(1);

  const nextStep = () => setStep(prev => prev + 1);

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
        {getStep()}
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
});
