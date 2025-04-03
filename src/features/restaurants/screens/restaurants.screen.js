import React from "react";
import { SafeAreaView, StatusBar, Text, View, StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component.js";

export const RestaurantsScreen = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.search}>
      <Searchbar value="" onChangeText={(text) => console.log(text)} />
    </View>
    <View style={styles.list}>
      <RestaurantInfoCard />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 20,
  },
  list: {
    backgroundColor: "blue",
    flex: 1,
    padding: 20,
  },
});
