import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import SearchBar from "./src/components/SearchBar";
import colors from "./src/utils/colors";
import React from "react";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.AndroidSafeAreaView}>
        <SearchBar />
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
      {/* <SafeAreaView style={styles.AndroidSafeAreaView}>
      <View style={{padding:16,backgroundColor:'green'}}>
        <Text>search</Text>
      </View>
      <View style={{flex:1,padding:16,backgroundColor:'blue'}}>
        <Text>list</Text>
      </View>
    </SafeAreaView>
    <ExpoStatusBar style='auto'/> */}
    </>
  );
}

const styles = StyleSheet.create({
  AndroidSafeAreaView: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  container: {
    flex: 1,
    backgroundColor: colors.blue,
  },
});
