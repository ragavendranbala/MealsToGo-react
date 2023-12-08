import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import { Searchbar } from "react-native-paper";

import colors from "../../../utils/colors";
import { spacing } from "../../../utils/sizes";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

export const RestaurtsScreen = () => {
  return (
    <SafeAreaView style={styles.AndroidSafeAreaView}>
      <View style={styles.search}>
        <Searchbar placeholder="Search Restaurants" mode="view" elevation={3} />
      </View>
      <View style={styles.container}>
        <RestaurantInfoCard />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  AndroidSafeAreaView: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: spacing.md,
  },
  search: {
    backgroundColor: colors.white,
    padding: spacing.sm,
  },
});
