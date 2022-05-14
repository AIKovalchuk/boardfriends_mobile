import React from "react";
import { View, StyleSheet } from "react-native";
import { Link } from "react-router-native";

import SearchIcon from "../../assets/search.svg";
import CreateIcon from "../../assets/add_circle.svg";
import AcountIcon from "../../assets/account.svg";

const NavigationBar = () => {
  return (
    <View style={styles.nav}>
      <Link to={"/"} style={styles.navItem} underlayColor="#f0f4f7">
        <SearchIcon />
      </Link>
      <Link to={"/create"} style={styles.navItem} underlayColor="#f0f4f7">
        <CreateIcon />
      </Link>
      <Link to={"/login"} style={styles.navItem} underlayColor="#f0f4f7">
        <AcountIcon />
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  nav: {
    flexDirection: "row",
    justifyContent: "space-around",

    borderTopWidth: 1,
    borderTopColor: "#c5c5c5",
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  subNavItem: {
    padding: 5,
  },
});

export default NavigationBar;
