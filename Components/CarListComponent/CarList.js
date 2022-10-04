import * as React from "react";
import { Text, View, FlatList, Dimensions } from "react-native";

import styles from "../CarListComponent/CarListStyle";
import cars from "../../assets/assets/cars";
import CarComponent from "../CarComponent/Car";

const data = {
  name: "Model X",
  tagline: "Order Online for",
  taglineCTA: "Touchless Delivery",
  image: require("../../assets/assets/images/ModelX.jpeg"),
};
const CarList = () => {
  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={cars}
          renderItem={(car) => <CarComponent car={car.item} />}
          showVerticalScrollIndicator={false}
          snapToAlignment={"start"}
          decelerationRate={"fast"}
          snapToInterval={Dimensions.get("window").height}
        />
      </View>
    </>
  );
};

export default CarList;
