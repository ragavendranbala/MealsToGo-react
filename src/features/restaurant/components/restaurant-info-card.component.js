import React from "react";
import { Card, Text } from "react-native-paper";
import { spacing } from "../../../utils/sizes";
import { StyleSheet } from "react-native";
import styled from "styled-components";

const Title = styled.Text`
  paddingTop: 8px;
  fontWeight: bold;
  fontSize:16px
`;
export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "RK Hotels!",
    icon,
    photos = [
      "https://media.istockphoto.com/id/1292563627/photo/assorted-south-indian-breakfast-foods-on-wooden-background-ghee-dosa-uttappam-medhu-vada.webp?s=2048x2048&w=is&k=20&c=jSUKc_lszNyaCpDzL-yU1nvcMNC7nECgPgKv_ndaYYs=",
    ],
    address = "Sholinganallur, Chennai",
    isOpenNow = true,
    rating = 4,
    isClosedTemprorily,
  } = restaurant;

  return (
    <Card elevation={5}>
      <Card.Content>
        <Card.Cover key={name} source={{ uri: photos[0] }} />
        <Title>{name}</Title>
        {/* <Text variant="titleLarge" style={styles.title}>
          {name}
        </Text> */}
        {/* <Text variant="bodyMedium">{address}</Text> */}
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  title: {
    paddingTop: spacing.sm,
  },
});
