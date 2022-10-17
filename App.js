import { StyleSheet, Text, View, StatusBar } from "react-native";
import CarList from "./Components/CarListComponent/CarList";
import Header from "./Components/HeaderComponent/Header";
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar styles='light'/>
      <Header />
      <CarList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#fff",
  },
});
