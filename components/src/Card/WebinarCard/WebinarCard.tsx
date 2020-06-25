import React, { FC } from "react";
import {
  Card,
  Grid,
  CardMedia,
  Avatar,
  Typography,
  Chip,
} from "@material-ui/core";
import styled from "styled-components";
import { WebinarKeyWords } from "../../KeyWords/KeyWords";
import moment from "jalali-moment";
import TimerIcon from "@material-ui/icons/Timer";
// import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";

const WebCard = styled(Card)`
    font-family: "IRANSans";
    margin: 0 auto;
    margin-top: 50px;
    width:260px;  
    justifyContent: 'space-between', 
    flexDirection: 'column'
    border-radius: 5px;
    box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
    padding: 13px 5px 13px 5px;  
    display: grid;
    grid-template-rows: auto 1px auto;
    box-sizing: content-box;
`;

const FatherGrid = styled(Grid)`
  margin-top: 15px;
  font-family: "IRANSans";
`;

const MyMedia = styled(CardMedia)`
  width: 231px;
  height: 145px;
  margin: 0 auto;
  cursor: pointer;
  object-fit: contain;
`;

const KeyWords = styled(WebinarKeyWords)`
  font-family: "IRANSans";
  color: #323232;
`;

const PresenterAvatar = styled(Avatar)`
  float: right;
  bottom: 15px;
  right: 22px;
`;

const WebinarName = styled(Typography)`
  font-family: "IRANSans";
  font-size: 18px;
  letter-spacing: -0.29px;
  color: #323232;
  cursor: pointer;
  margin: 40px 15px 0px 0px;
`;

const Title = styled(Typography)`
  font-family: "IRANSans";
  font-size: 16px;
  letter-spacing: -0.29px;
  color: #c2c2c2;
  margin: 0px 15px 0px 0px;
`;

const TitleText = styled.span`
  font-family: "IRANSans";
  color: #323232;
  font-size: 14px;
  margin-right: 15px;
`;

const NameText = styled.a`
  font-family: "IRANSans";
  color: #323232;
  font-size: 14px;
  margin-right: 15px;
  cursor: pointer;
  :active {
    color: black;
  }
  :visited {
    color: black;
  }
  :hover {
    color: black;
  }
`;
const TimeStatus = styled(Chip)`
  font-family: "IRANSans";
  padding: 5px;
  position: relative;
  bottom: 216px;
`;

// const Like = styled.a`
//   font-family: "IRANSans";
//   float: left;
//   color: grey;
//   &:hover {
//     color: red;
//   }
// `;

const remainingdays = (webinarDate) => {
  let remainingDays;
  let remaininghours;
  if (moment().isBefore(moment(webinarDate))) {
    const momentWebinarDate = moment(webinarDate);
    const remaining = momentWebinarDate.diff(moment(), "hours");
    remainingDays = Math.floor(remaining / 24);
    remaininghours = remaining - remainingDays * 24;
  } else {
    const momentWebinarDate = moment(webinarDate);
    const remaining = moment().diff(momentWebinarDate, "hours");
    remainingDays = Math.floor(remaining / 24);
    remaininghours = remaining - remainingDays * 24;
  }
  return { remainingDays, remaininghours };
};

export interface WebinarCardProps {
  id: string;
  presenterId?: string;
  name: string;
  image: string;
  presenter?: string;
  presenterImage?: string;
  keywords: string[];
  date: string;
  endDate: string;
  webinarLink?: string | undefined | null;
  link: (children: JSX.Element, id: string) => JSX.Element;
  presenterLink?: (children: JSX.Element, id: string) => JSX.Element;
}

export const WebinarCard: FC<WebinarCardProps> = ({
  id,
  presenterId,
  name,
  image,
  presenter,
  presenterImage,
  keywords,
  date,
  endDate,
  link,
  presenterLink,
}) => {
  const presenting =
    Date.now() >= Date.parse(date) && Date.now() <= Date.parse(endDate);
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
  const remainingDay = moment().isBefore(moment(date)) ? (
    <Grid item xs={6}>
      <Title>ساعت دیگر</Title>
    </Grid>
  ) : (
    <Grid item xs={6}>
      <Title>ساعت پیش</Title>
    </Grid>
  );
  const avatar =
    presenterLink && presenterId ? (
      presenterLink(
        <PresenterAvatar
          aria-label="recipe"
          src={presenterImage}
          title={presenter}
        />,
        presenterId
      )
    ) : (
      <div></div>
    );
  const presenterName =
    presenterLink && presenterId ? (
      <Title>
        ارائه دهنده{" "}
        {presenterLink(
          <NameText title={presenter}> {presenter} </NameText>,
          presenterId
        )}
      </Title>
    ) : (
      <div></div>
    );
  return (
    <WebCard>
      {link(<MyMedia image={image} title={name} />, id)}
      {avatar}
      {link(<WebinarName>{name}</WebinarName>, id)}
      {presentingChip}
      <FatherGrid
        container
        direction="row"
        justify="flex-start"
        alignItems="baseline"
      >
        <Grid item xs={12}>
          {presenterName}
        </Grid>
      </FatherGrid>
      <FatherGrid
        container
        direction="row"
        justify="center"
        alignItems="baseline"
      >
        <Grid item xs={4}>
          <Title>کلیدواژه ها</Title>
        </Grid>
        <Grid item xs={8}>
          <KeyWords keywords={keywords} />
        </Grid>
      </FatherGrid>
      <FatherGrid
        container
        direction="row"
        justify="center"
        alignItems="flex-end"
      >
        <Grid item xs={3}>
          <Title>تاریخ</Title>
        </Grid>
        <Grid item xs={9}>
          <TitleText>
            {" "}
            {moment(date.toString(), "YYYY-M-D HH:mm:ss ")
              .add(3, "hours")
              .locale("fa")
              .format("HH:mm YYYY-M-D  ")}
          </TitleText>
        </Grid>
        {/*TODO: Like should implenment in the future with our server-side or repo after authenticate */}
        {/* <Grid item xs={4} >
                            <Like href="#">
                                <FavoriteBorderOutlinedIcon />
                            </Like>
                        </Grid>                                          */}
      </FatherGrid>
      <FatherGrid
        container
        direction="row"
        justify="center"
        alignItems="flex-end"
      >
        <Grid item xs={2}>
          <TitleText>{remainingdays(date).remainingDays}</TitleText>
        </Grid>
        <Grid item xs={2}>
          <Title>روز</Title>
        </Grid>
        <Grid item xs={2}>
          <TitleText>{remainingdays(date).remaininghours}</TitleText>
        </Grid>
        {remainingDay}
      </FatherGrid>
    </WebCard>
  );
};

export default WebinarCard;
