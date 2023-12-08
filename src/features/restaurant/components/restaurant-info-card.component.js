import React from "react";
import { Card, Text } from "react-native-paper";
import styled from "styled-components";
import { View } from "react-native";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";

const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
`;
const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const RestaurantCardCover = styled(Card.Cover)``;

const RestaurantCard = styled(Card)``;
const RestaurantCardContent = styled(Card.Content)``;
const Info = styled(View)`
  padding-top: ${(props) => props.theme.space[2]};
`;
const Rating = styled(View)`
  padding-top: ${(props) => props.theme.space[1]};
  padding-top: ${(props) => props.theme.space[1]};
  flex-direction: row;
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

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardContent>
        <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
        <Info>
          <Title>{name}</Title>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </Rating>
          <Address>{address}</Address>
        </Info>
      </RestaurantCardContent>
    </RestaurantCard>
  );
};
