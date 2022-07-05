import { Text, View } from "react-native";
import React from "react";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

const Drawer: React.FC<DrawerContentComponentProps> = (
  props: DrawerContentComponentProps,
) => {
  return (
    <View style={{ flex: 1 }}>
      <View>
        <View>{/* <Image /> */}</View>
      </View>
      <DrawerContentScrollView>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
};

export default Drawer;
