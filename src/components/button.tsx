import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../constants/theme";

type Props = {
  title: string;
  onPress?: () => void;
  outline: boolean;
};

const Button: React.FC<Props> = ({ title, onPress, outline }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={{ ...styles.button }}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    margin: 8,
  },
  button: {
    backgroundColor: COLORS.primary,
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  text: {
    fontFamily: "Roboto",
    fontSize: 24,
    textAlign: "center",
    textTransform: "uppercase",
    color: "#000",
    fontWeight: "500",
  },
});
