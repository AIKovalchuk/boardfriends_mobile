import {
  Modal,
  SafeAreaView,
  SectionList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

type Props = {};

const Selector = (props: Props) => {
  return (
    <>
      <TouchableOpacity>
        <Text>{"text"}</Text>
      </TouchableOpacity>
      <Modal>
        <SafeAreaView></SafeAreaView>
      </Modal>
    </>
  );
};

export default Selector;

const styles = StyleSheet.create({});
