import React, { FC } from "react";
import { Grid, Avatar, Typography } from "@material-ui/core";
import { ShowMoreText } from "../Text/ShowMore";
import styled from "styled-components";

const DescriptionDiv = styled(Grid)`
  padding: 26px 68px 34px 50px;
  width: 850px;
  min-height: 301px;
  border-radius: 15px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  @media (max-width: 768px) {
    padding: 10px;
    width: unset;
  }
`;

const PresenterDetail = styled(Grid)`
  margin-bottom: 5px;
  margin-top: 5px;
`;

const PresenterName = styled(Typography)`
  font-family: "IRANSans";
  margin-bottom: 15px;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

// const FollowGrid = styled(Grid)`
//   text-align: center;
// `;

const FatherGrid = styled(Grid)`
  font-family: "IRANSans";
`;

const PresenterImage = styled(Avatar)`
  width: 128px;
  height: 128px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.25);
  @media (max-width: 768px) {
    margin: 0 auto;
  }
`;

const Title = styled.span`
  font-family: "IRANSans";
  font-size: 10px;
  letter-spacing: -0.29px;
  color: #c2c2c2;
`;

const Education = styled.span`
  font-family: "IRANSans";
  font-size: 12px;
  letter-spacing: -0.29px;
  color: #7a7a7a;
`;

const PresenterDesc = styled.div`
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

// const FollowButton = styled(Button)`
//   width: 174px;
//   height: 34px;
//   border-radius: 17px;
//   background-color: #91bfd9;
//   font-family: "IRANSans";
//   color:#ffffff
//   font-size: 14px;
//   margin: 0 auto;
//   margin-top:8px;
//   text-align: center;
// `;

export interface PresenterDescriptionProps {
  prsenterUniversity?: string | undefined | null;
  prsenterName?: string | undefined | null;
  prsenterImage?: string | undefined | null;
  prsenterEducation?: string | undefined | null;
  description?: string | undefined | null;
}

export const PresenterDescription: FC<PresenterDescriptionProps> = (props) => {
  if (
    !props.prsenterUniversity ||
    !props.prsenterName ||
    !props.prsenterImage ||
    !props.prsenterEducation ||
    !props.description
  ) {
    return <div></div>;
  }

  return (
    <DescriptionDiv>
      <FatherGrid
        item
        xs={12}
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-end"
      >
        <Grid item lg={5} xl={5} md={5} sm={12} xs={12}>
          <FatherGrid
            item
            xs={12}
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-end"
          >
            <Grid item lg={6} xl={6} md={6} sm={12} xs={12}>
              <PresenterImage
                src={props.prsenterImage}
                title={props.prsenterName}
              />
            </Grid>
            <Grid item lg={6} xl={6} md={6} sm={12} xs={12}>
              <PresenterDetail
                item
                xs={12}
                container
                direction="column"
                justify="flex-start"
                alignItems="center"
              >
                <Grid item xs={12} lg={12} xl={12} md={12} sm={12}>
                  <PresenterName variant="h6" gutterBottom>
                    {props.prsenterName}
                  </PresenterName>
                </Grid>
                <Grid item xs={12} lg={12} xl={12} md={12} sm={12}>
                  <Title>دانشگاه:</Title>{" "}
                  <Education>{props.prsenterUniversity}</Education>
                </Grid>
                <Grid item xs={12} lg={12} xl={12} md={12} sm={12}>
                  <Title>رشته:</Title>{" "}
                  <Education>{props.prsenterEducation}</Education>
                </Grid>
              </PresenterDetail>
            </Grid>
          </FatherGrid>
        </Grid>
        <Grid item lg={2} xl={2} md={2} />
        {/* TODO Follow button should add after serverside  */}
        {/* <FollowGrid item lg={5} xl={5} md={5} sm={12} xs={12}>
          <FollowButton>دنبال کردن</FollowButton>
        </FollowGrid> */}
      </FatherGrid>
      <PresenterDesc>
        <ShowMoreText text={props.description} />
      </PresenterDesc>
    </DescriptionDiv>
  );
};

export default PresenterDescription;
