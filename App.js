import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";

import { RestaurtsScreen } from "./src/features/restaurant/screens/restaurants.screen";

export default function App() {
  return (
    <>
      <RestaurtsScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}
