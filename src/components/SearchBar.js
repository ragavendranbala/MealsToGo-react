import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import colors from "../utils/colors";
import { spacing } from "../utils/sizes";
const SearchBar = ({ props }) => {
  return (
    <View style={styles.searchBarParent}>
      <TextInput placeholder="Type your query here!!" />
      {/* <Text>Search</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarParent: {
    // flex : .1,
    backgroundColor: colors.green,
    borderBottomColor: "#000000",
    padding: spacing.md,
    //     borderBottomWidth: 10,
    //    justifyContent:'center'
  },
  searchBar: {
    backgroundColor: colors.green,
    flex: 1,
    padding: 10,
  },
});

export default SearchBar;
