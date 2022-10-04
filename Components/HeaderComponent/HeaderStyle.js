import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 20,
    zIndex: 500,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingLeft: 10,
  },
  logo: {
    height: 20,
    width: 100,
    resizeMode: "contain",
  },
  menu: {
    height: 40,
    width: 100,
    resizeMode: "contain",
  },
});
export default styles;
