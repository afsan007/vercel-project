import React, { FC } from "react";
import {
  Grid,
  Chip,
  CardMedia,
  Avatar,
  Typography,
  Button,
} from "@material-ui/core";
// import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { ShowMoreText } from "../Text/ShowMore";
import { WebinarKeyWords } from "../KeyWords/KeyWords";
import TimerIcon from "@material-ui/icons/Timer";
import styled from "styled-components";

const DescriptionDiv = styled(Grid)`
  padding: 26px 68px 34px 50px;
  max-width: 850px;
  min-height: 301px;
  border-radius: 15px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  @media (max-width: 768px) {
    padding: 10px;
    width: unset;
  }
`;

const WebinarTitle = styled(Typography)`
  font-family: "IRANSans";
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const FatherGrid = styled(Grid)`
  font-family: "IRANSans";
  margin-top: 5px;
`;

const WebinarImage = styled(CardMedia)`
  width: 229px;
  height: 143px;
  background-size: contain;
  @media (max-width: 768px) {
    margin: 0 auto;
  }
`;

const WebinarDetail = styled.div`
  margin-top: 10px;
`;

const Title = styled.span`
  font-family: "IRANSans";
  font-size: 10px;
  letter-spacing: -0.29px;
  color: #c2c2c2;
  margin: 0px 10px 0px 0px;
`;

const FullName = styled.span`
  font-family: "IRANSans";
  font-size: 12px;
  letter-spacing: -0.29px;
  color: #7a7a7a;
  cursor: pointer;
`;

const WebinarDesc = styled(Grid)`
  font-family: "IRANSans";
  min-height: 150px;
  margin-top: 25px;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #7a7a7a;
`;

const TimeStatus = styled(Chip)`
  font-family: "IRANSans";
  padding: 5px;
  float: left;
  @media (max-width: 768px) {
    text-align: center;
    float: unset;
  }
`;
const ButtonStyle = styled(Button)`
  font-family: "IRANSans";
  border-radius: 17px;
  width: 174px;
  height: 34px;
  margin: 4px 20px;
  cursor: pointer;
  background-color: #91bfd9;
  color: white;
  font-size: 16px;
`;
const ButtonGrid = styled(Grid)`
  text-align: center;
`;
// const Oval = styled.div`
//   position: relative;
//   float:left;
//   bottom:10px;
//   left: 20px;
//   width: 79px;
//   height: 75px;
//   background-color: #91bfd9;
//   border-radius: 120px;
//   text-align: center;
//   color: white;
//   cursor: pointer;
//   @media (max-width: 768px) {
//     bottom:0px;
//     left: 0px;
//     float: unset;
//     margin: 0 auto;
//    }
// `

const SpaceBetween = styled.div`
  margin-top: 5px;
`;

// const LikeSymbol = styled(FavoriteBorderIcon)`
//   margin-top:15px;
//   font-size: 48px;
// `

export interface WebinarDescriptionProps {
  image?: string | undefined | null;
  title?: string | undefined | null;
  prsenterName?: string | undefined | null;
  prsenterImage?: string | undefined | null;
  prsenterEducation?: string | undefined | null;
  keywords?: string[] | undefined | null;
  description?: string | undefined | null;
  presenterId: string | undefined | null;
  startDate?: string | undefined | null;
  endDate?: string | undefined | null;
  webinarLink?: string | undefined | null;
  presenterLink: (children: JSX.Element, id: string) => JSX.Element;
}

export const WebinarDescription: FC<WebinarDescriptionProps> = (props) => {
  if (
    !props.image ||
    !props.title ||
    !props.prsenterImage ||
    !props.prsenterName ||
    !props.keywords ||
    !props.description ||
    !props.presenterId ||
    !props.startDate ||
    !props.endDate ||
    !props.webinarLink
  ) {
    return <div></div>;
  }
  const presenting =
    Date.now() >= Date.parse(props.startDate) &&
    Date.now() <= Date.parse(props.endDate);
  const presentingChip = presenting ? (
    <TimeStatus
      size="small"
      icon={<TimerIcon />}
      label="در حال برگزاری "
      color="secondary"
    />
  ) : (
    <></>
  );
  let link = props.webinarLink ? props.webinarLink : "";
  const webinarLink =
    presenting && link != "" ? (
      <ButtonStyle
        onClick={() => {
          window.open(link, "_blank");
        }}
        variant="contained"
      >
        برو به وبینار
      </ButtonStyle>
    ) : (
      <></>
    );
  return (
    <DescriptionDiv>
      {presentingChip}

      <FatherGrid
        item
        xs={12}
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Grid item lg={4} xl={4} md={4} sm={4} xs={12}>
          <WebinarImage image={props.image} title={props.title} />
        </Grid>
        <Grid item lg={8} xl={8} md={8} sm={4} xs={12}>
          <WebinarDetail>
            <WebinarTitle variant="h6" gutterBottom>
              {props.title}
            </WebinarTitle>
            <FatherGrid
              item
              xs={12}
              container
              direction="row"
              justify="flex-start"
              alignItems="center"
            >
              <Grid item xs={2} lg={1} xl={1} md={1} sm={2}>
                {props.presenterLink(
                  <a>
                    <Avatar
                      aria-label="recipe"
                      src={props.prsenterImage}
                      title={props.prsenterName}
                    />
                  </a>,
                  props.presenterId
                )}
              </Grid>
              <Grid item xs={10} lg={11} xl={11} md={11} sm={10}>
                <Title>ارائه دهنده:</Title>{" "}
                {props.presenterLink(
                  <FullName>{props.prsenterName}</FullName>,
                  props.presenterId
                )}
              </Grid>
              <SpaceBetween>
                <Title>تحصیلات:</Title>{" "}
                <FullName>{props.prsenterEducation}</FullName>
              </SpaceBetween>
            </FatherGrid>
            <FatherGrid
              item
              xs={12}
              container
              spacing={0}
              direction="row"
              justify="flex-start"
              alignItems="center"
            >
              <Grid item lg={2} xl={2} md={2} sm={4} xs={12}>
                <Title>کلیدواژه ها</Title>
              </Grid>
              <Grid item lg={10} xl={10} md={10} sm={12} xs={12}>
                <WebinarKeyWords keywords={props.keywords} />
              </Grid>
            </FatherGrid>
          </WebinarDetail>
        </Grid>
        <WebinarDesc>
          <ShowMoreText text={props.description} />
          <ButtonGrid>{webinarLink}</ButtonGrid>
        </WebinarDesc>
      </FatherGrid>
      {/* <Oval>
                <LikeSymbol />
            </Oval>   */}
    </DescriptionDiv>
  );
};

export default WebinarDescription;
