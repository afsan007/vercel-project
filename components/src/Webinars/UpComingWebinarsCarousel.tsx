import React, { FC } from "react";
import {
  WebinarCard,
  WebinarCardProps,
} from "../Card/WebinarCard/WebinarCard";
import { TextTitle } from "../Titles/TextTitle";
import { ItemCarousel } from "../Carousel/ItemCarousel";
import { Container, Grid } from "@material-ui/core";
import styled from "styled-components";

const ContainerSection = styled(Grid)`
  background-color: ${(props) => props.color};
  display: flex;
`;

const TitleDiv = styled.div`
  margin-top: 40px;
`;

const FileSectionTitle = styled.div`
  margin: 30px 50px 0px 0px;
  @media (max-width: 768px) {
    margin-right: 0px;
  }
`;

export interface UpcomiongWebinarProps {
  Webinars: WebinarCardProps[];
  title: string;
  color?: string;
}

const renderWebinars = ({ Webinars }) => {
  return Webinars.map(function(Webinar, index) {
    return (
      <WebinarCard
        key={index}
        id={Webinar.id}
        name={Webinar.name}
        image={Webinar.image}
        presenter={Webinar.presenter}
        presenterImage={Webinar.presenterImage}
        keywords={Webinar.keywords}
        date={Webinar.date}
        endDate = {Webinar.endDate}
        link={Webinar.link}
        presenterId={Webinar.presenterId}
        presenterLink={Webinar.presenterLink}
      />
    );
  });
};

export const UpComingWebinarsCarousel: FC<UpcomiongWebinarProps> = ({
  Webinars,
  title,
  color,
}) => {
  return (
    <ContainerSection container color={color}>
      <Container maxWidth="lg">
        <FileSectionTitle>
          <TitleDiv>
            <TextTitle title={title} />
          </TitleDiv>
        </FileSectionTitle>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="stretch"
          spacing={0}
        >
          <ItemCarousel>{renderWebinars({ Webinars })}</ItemCarousel>
        </Grid>
      </Container>
    </ContainerSection>
  );
};

export default UpComingWebinarsCarousel;
