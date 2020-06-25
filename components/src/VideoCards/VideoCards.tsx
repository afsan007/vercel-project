import React from "react";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { VideoCard, VideoCardProps } from '../Card/VideoCard/VideoCard';
import {TextTitle} from "../Titles/TextTitle";
import styled from "styled-components";


const ContainerSection = styled(Grid)`
    background-color: #ffffff;
`;

const VideoSectionTitle = styled.div`
  margin: 30px 50px 50px 0px;
  @media (max-width: 768px) {
    margin-right: 0px;
  }
`


const Mygrid = styled(Grid)`
    margin-top:30px;
    margin-bottom: 30px
`
export interface VideosCardProps {
        videos?: VideoCardProps[]
    };

const renderVideos = ({ videos }: VideosCardProps) => {
      if(!videos) return <></>;
      return videos.map(function (video, index) {
        return(             
          <Grid key = {index} item xl={3} lg={4} md={4} sm={4} xs={12} >
              <VideoCard
                    key = {index}   
                    desc = {video.desc}
                    video = {video.video}
                    duration = {video.duration}              
                />
            </Grid>
              );
  });
}

export const VideoCards = ({videos}: VideosCardProps) => {
  if(!videos || videos.length === 0) return <></>;
  return (   
        <ContainerSection
            container
        >
          <Container maxWidth="lg">
            <VideoSectionTitle>
              <TextTitle title = "ویدیوها" dir = "right" />
            </VideoSectionTitle>
            <Mygrid
              container
              direction="row"
              justify="flex-start"
              alignItems="center"
              spacing={0}
            >
              {renderVideos({videos})}   
            </Mygrid> 
          </Container>                       
        </ContainerSection>
  );
};

export default VideoCards;
