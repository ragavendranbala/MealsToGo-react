import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../utils/colors";
import { spacing } from "../utils/sizes";
import { Searchbar } from "react-native-paper";

const SearchBar = () => {
  return (
    <View style={styles.searchBarParent}>
      {/* <TextInput placeholder="Type your query here!!" /> */}
      <Searchbar placeholder="Search Restaurants" mode="view" elevation={3} />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarParent: {
    backgroundColor: colors.white,
    padding: spacing.sm,
  },
  searchBar: {
    backgroundColor: colors.green,
    flex: 1,
    padding: 10,
  },
});

export default SearchBar;
