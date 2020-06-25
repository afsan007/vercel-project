import React, { FC } from "react";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import GetAppIcon from '@material-ui/icons/GetApp';

const VideoCardComponent = styled(Card)`
  font-family: "IRANSans";
  width: 180px;
  height: 195px;
  border-radius: 5px;
  box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  padding: 13px 5px 13px 5px;
  margin:0 auto;
  margin-bottom: 10px;
`;

const MyMedia = styled.div`
  width: 161px;
  height: 103px;
  margin: 0 auto;
  object-fit: contain;
`;

const ImageFile = styled(CardMedia)`
    width: 161px;
    height: 103px;
`

const VideoDesc = styled(Typography)`
  font-family: "IRANSans";
  text-align: right;
  font-size: 12px;
  letter-spacing: -0.29px;
  color: #323232;
  height:30px;
`;

const FatherGrid = styled(Grid)`
    margin-top: 5px;
    font-family: "IRANSans";
`

const Desc = styled.span`
    font-family: "IRANSans";
    font-size: 10px;
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


export interface OtherFileCardProps {
  title: string;
  type: string;
  src: string;
  image?: string;
}

export const OtherFileCard: FC<OtherFileCardProps> = ({title, type, src, image = "/File.jpg"}) =>{
  if (image === null) image =  "/File.jpg";
   return (     
        <VideoCardComponent>
            <MyMedia>
                <ImageFile 
                  image = {image}
                  title = {title}
                />
          </MyMedia>
          <CardContent>
            <VideoDesc>{title}</VideoDesc>
            <FatherGrid item xs={12} container direction="row" justify="flex-start" alignItems="flex-start">
                        <Grid item xs={6}> 
                            <Desc>
                                {type}
                            </Desc>                    
                        </Grid>
                        <Grid item xs={6}>
                            <Download href={src}>
                                <GetAppIcon/>
                            </Download>
                        </Grid>
                </FatherGrid>
          </CardContent>
        </VideoCardComponent>
  );
};

export default OtherFileCard;
