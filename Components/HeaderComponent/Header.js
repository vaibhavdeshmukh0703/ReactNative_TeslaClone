import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import styles from "./HeaderStyle";

const Header = () => {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          alert("Site Under Construction");
        }}
      >
        <Image
          style={styles.logo}
          source={require("../../assets/assets/images/logo.png")}
        />
      </Pressable>
      <Pressable
        onPress={() => {
          alert("Menu Under Construction");
        }}
      >
        <Image
          style={styles.menu}
          source={require("../../assets/assets/images/menu.png")}
        />
      </Pressable>
    </View>
  );
};

export default Header;
