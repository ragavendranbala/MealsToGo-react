import React from "react";
import { Card, Text } from "react-native-paper";
import styled from "styled-components";
import { View, Image } from "react-native";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";

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
  flex: 1;
`;

const Section = styled(View)`
  flex-direction: row;
  align-item: center;
`;
const SectionEnd = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "RK Hotels!",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://media.istockphoto.com/id/1292563627/photo/assorted-south-indian-breakfast-foods-on-wooden-background-ghee-dosa-uttappam-medhu-vada.webp?s=2048x2048&w=is&k=20&c=jSUKc_lszNyaCpDzL-yU1nvcMNC7nECgPgKv_ndaYYs=",
    ],
    address = "Sholinganallur, Chennai",
    isOpenNow = true,
    rating = 4,
    isClosedTemprorily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardContent>
        <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
        <Info>
          <Title>{name}</Title>
          <Section>
            <Rating>
              {ratingArray.map(() => (
                <SvgXml xml={star} width={20} height={20} />
              ))}
            </Rating>
            <SectionEnd>
              {isClosedTemprorily && (
                <Text variant="labelLarge">CLOSED TEMPORARILY</Text>
              )}
              <View style={{ paddingLeft: 8 }} />
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
              <View style={{ paddingLeft: 8 }} />
              <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
            </SectionEnd>
          </Section>
          <Address>{address}</Address>
        </Info>
      </RestaurantCardContent>
    </RestaurantCard>
  );
};
