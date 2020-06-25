import React from "react";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import GetAppIcon from '@material-ui/icons/GetApp';

const VideoCardComponent = styled(Card)`
  font-family: "IRANSans";
  width: 243px;
  height: 255px;
  border-radius: 5px;background-color: white;
  box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  padding: 13px 5px 13px 5px;
  margin:0 auto;
  margin-bottom: 10px;
`;

const MyMedia = styled.div`
  font-family: "IRANSans";
  width: 220px;
  height: 140px;
  margin: 0 auto;
  object-fit: contain;
`;

const VideoDesc = styled(Typography)`
  font-family: "IRANSans";
  text-align: right;
  font-size: 12px;
  letter-spacing: -0.29px;
  color: #323232;
  height:50px;
  margin-bottom: 5px;
`;

const FatherGrid = styled(Grid)`
    margin-top: 10px;
    font-family: "IRANSans";
`

const Title = styled.span`
    font-family: "IRANSans";
    font-size: 12px;
    letter-spacing: -0.29px;
    color: #c2c2c2;
`;

const Duration = styled.span`
    font-family: "IRANSans";
    font-size: 14px;
    font-weight: bold;
    letter-spacing: -0.29px;
    color: #7a7a7a;
    margin: 0px 5px 0px 0px;
`;

const Download = styled.a`
    float:left;
    color: #7a7a7a;
    cursor: pointer
    &:hover {
        color: 91bfd9;
    };
`


export interface VideoCardProps {
  desc: string;
  video: string;
  duration: string;
}

export const VideoCard = ({
  desc,
  video,
  duration,
}: VideoCardProps) => {
  return (      
        <VideoCardComponent>
            <MyMedia>
                <CardMedia 
                  component = "iframe"
                  src = {video}
                  width = "220"
                  height = "140"
                  title = {desc}
                />
          </MyMedia>
          <CardContent>
            <VideoDesc>{desc}</VideoDesc>
            <FatherGrid item xs={12} container direction="row" justify="flex-start" alignItems="flex-start">
                        <Grid item xs={6}>
                            <Title>
                                  مدت: 
                            </Title>   
                            <Duration>
                                {duration}
                            </Duration>                    
                        </Grid>
                        <Grid item xs={6}>
                            <Download href={video}>
                                <GetAppIcon/>
                            </Download>
                        </Grid>
                </FatherGrid>
          </CardContent>
        </VideoCardComponent>
  );
};

export default VideoCard;
