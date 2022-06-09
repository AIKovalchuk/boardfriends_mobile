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
        <SearchIcon style={styles.icon} />
      </Link>
      <Link to={"/create"} style={styles.navItem} underlayColor="#f0f4f7">
        <CreateIcon style={styles.icon} />
      </Link>
      <Link to={"/profile"} style={styles.navItem} underlayColor="#f0f4f7">
        <AcountIcon style={styles.icon} />
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
    backgroundColor: "white",
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  subNavItem: {
    padding: 5,
  },
  icon: {
    height: 32,
    width: 32,
  },
});

export default NavigationBar;
