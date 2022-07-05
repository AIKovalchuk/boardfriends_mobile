import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const COLORS = {
  primary: "#F86624",
  white: "#fff",
};

export const SIZES = {
  h1: 20,
  h2: 18,
  h3: 16,
  h4: 14,
  h5: 12,
  h6: 10,

  width,
  height,
};

export const FONTWIGHT = {
  bold: "bold",
  normal: "normal",
} as const;
