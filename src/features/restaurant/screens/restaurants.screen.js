import React from "react";
import { View, SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components";

const RestaurantListContainer = styled(View)`
  flex: 1;
  background-color: ${(props) => [props.theme.colors.bg.primary]};
  padding: ${(props) => [props.theme.space[3]]};
`;

const SearchContainer = styled(View)`
  background-color: ${(props) => [props.theme.colors.bg.primary]};
  padding:  ${(props) => [props.theme.space[2]]};
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
