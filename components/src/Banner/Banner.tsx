import React, { FC } from "react";
import styled from "styled-components";
import { Text } from "../Text/Text";
import Grid from "@material-ui/core/Grid";
import { LoadingData} from '../Progress/LoadingData'

const Root = styled(Grid)`
  background-image: linear-gradient(
      -239deg,
      rgba(19, 90, 128, 0.6) 25%,
      rgba(0, 37, 63, 0.92) 82%
    ),
    url(${props => props.theme});
  height: 434px;
  background-size: cover;
  background-position: right bottom, left top;
  margin-top: 80px;
`;

export interface BannerProps {
  title: string;
  description: string;
  linktitle: string;
  image?: string;
  linkWrapper: (children: JSX.Element) => JSX.Element;
  loading: boolean;
}

export const Banner: FC<BannerProps> = ({
  title,
  description,
  linktitle,
  linkWrapper,
  image,
  loading
}) => {
  return (
    <LoadingData loading={loading}>
    {() => {
      return(
       <>
       <Root theme = {image} container direction="row" justify="flex-start" alignItems="center" >
          <Grid item xl={1} lg={1} md={1} sm={1} xs={1}></Grid>
          <Grid item xl={3} lg={3} md={3} sm={6} xs={10}>
          <Text
            title={title}
            description={description}
            linktitle={linktitle}
            linkWrapper={linkWrapper}
          />
          </Grid>
          <Grid item xl={8} lg={8} md={8} sm={5} xs={1}></Grid>
        </Root>
       </>
       )}}
      </LoadingData>
  );
};
export default Banner;
