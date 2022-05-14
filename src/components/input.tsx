import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

type Props = {
  style?: object;
  label?: string;
  placeholder?: string;
  value?: string;
  onChange: (query: string) => void;
};

const Input: React.FC<Props> = ({
  style,
  label,
  placeholder,
  value,
  onChange,
}) => {
  const handleInput = (text: string) => {
    onChange(text);
  };

  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={[style, styles.input]}
        placeholder={placeholder}
        value={value}
        onChangeText={handleInput}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    color: "#000",
    fontSize: 16,
    marginLeft: 4,
  },
  input: {
    borderRadius: 16,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 18,
    lineHeight: 21,

    paddingLeft: 4,
    textAlignVertical: "top",

    backgroundColor: "#fff",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
});

export default Input;
