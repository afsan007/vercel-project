import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

const Cards = styled(Card)`
  font-family: "IRANSans";
  width: 232px;
  min-height: 226px;
  border-radius: 15px;
  box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  padding: 25px 5px 13px 5px;
  margin-bottom: 30px;
`;

const MyMedia = styled(CardMedia)`
  font-family: "IRANSans";
  width: 60px;
  height: 61px;
  margin: 0 auto;
`;

const ServiseName = styled(Typography)`
  font-family: "IRANSans";
  text-align: right;
  font-size: 18px;
  letter-spacing: -0.29px;
  color: #7a7a7a;
  margin-bottom: 5px;
`;

const Description = styled(Typography)`
  font-family: "IRANSans";
  text-align: right;
  font-size: 16px;
  letter-spacing: -0.25px;
  color: #c2c2c2;
`;

export interface ServiceCardProps {
  name: string;
  image: string;
  description: string;
}

export const ServiceCard = ({ name, image, description }: ServiceCardProps) => {
  return (
    <Cards>
      <MyMedia image={image} title={name} />
      <CardContent>
        <ServiseName>{name}</ServiseName>
        <Description>{description}</Description>
      </CardContent>
    </Cards>
  );
};

export default ServiceCard;
