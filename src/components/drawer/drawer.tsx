import { ImageBackground, Text, View } from "react-native";
import React from "react";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { AuthContext } from "../../provider/auth";

const Drawer: React.FC<DrawerContentComponentProps> = (
  props: DrawerContentComponentProps,
) => {
  const { getUser } = React.useContext(AuthContext);

  const user = getUser();

  return (
    <View style={{ flex: 1 }}>
      {user && (
        <View>
          <View>
            <Text>{`${user.firstName} ${user.lastName}`}</Text>
          </View>
        </View>
      )}
      <DrawerContentScrollView>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
};

export default Drawer;
