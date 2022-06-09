import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";

type Props = {
  style?: object;
  label?: string;
  // onChange: (query: string) => void;
  error?: string;
  secureTextEntry?: boolean;
};

const Input: React.FC<Props & TextInputProps> = ({
  style,
  label,
  // onChange,
  error,
  secureTextEntry,
  ...props
}) => {
  return (
    <View style={{ marginBottom: 20 }}>
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.inputContainer]}>
        <TextInput
          autoCorrect={false}
          style={styles.input}
          placeholderTextColor="rgba(0, 0, 0, 0.4)"
          secureTextEntry={secureTextEntry}
          {...props}
        />
      </View>
      {error && <Text>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    color: "#000",
    fontSize: 14,
    marginLeft: 12,
    marginBottom: 4,
  },
  inputContainer: {
    // height: 40,
    paddingHorizontal: 8,
    borderRadius: 16,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4,
    elevation: 6,

    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    color: "#000",
  },
});

export default Input;
