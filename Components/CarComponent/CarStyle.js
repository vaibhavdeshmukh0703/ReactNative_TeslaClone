import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  image: {
    height: "100%",
    width: "100%",
    minHeight: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  container: {
    width: "100%",
    height: Dimensions.get("window").height,
  },
  title: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  Heading: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
    marginTop:130,
  },
  subHeading: {
    fontSize: 15,
    color: "#5c5e62",
  },
  subHeading__tagLineCTA: {
    textDecorationLine: "underline",
  },
});

export default styles;
