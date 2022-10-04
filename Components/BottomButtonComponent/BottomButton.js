import * as React from "react";
import { Pressable, View, Button, Text } from "react-native";
import styles from "./BottomButtonStyle";
const BottomButton = (props) => {
 
  const { type, title, onPress } = props;

  const backgroundColor = type === "primary" ? "#171A20CC" : "#FFFFFFA6";
  const textColor = type === "primary" ? "#FFFFFF" : "#171A20";

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, { backgroundColor: backgroundColor }]}
        onPress={() => alert("Page Under Construction")}
      >
        <Text style={[styles.text, { color: textColor }]}>{title}</Text>
      </Pressable>
    </View>
  );
};

export default BottomButton;
