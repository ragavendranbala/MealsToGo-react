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
import styled from "styled-components";

const RestaurantListContainer = styled(View)`
  flex: 1;
  background-color: white;
  padding: ${spacing.md}px;
`;

const SearchContainer = styled(View)`
  background-color: white;
  padding: ${spacing.sm}px;
`;
const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

export const RestaurantsScreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar placeholder="Search Restaurants" mode="view" elevation={3} />
      </SearchContainer>
      <RestaurantListContainer>
        <RestaurantInfoCard />
      </RestaurantListContainer>
    </SafeArea>
  );
};
