import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";

const CreateEventScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>CreateEventScreen</Text>
    </View>
  );
};

export default CreateEventScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "stretch",
    flexDirection: "column",
    backgroundColor: "red",
  },
  text: {
    color: "#fff",
    fontSize: 14,
  },
});
