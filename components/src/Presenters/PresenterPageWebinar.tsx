import React, { FC } from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import {
  WebinarCard,
  WebinarCardProps,
} from "../Card/WebinarCard/WebinarCard";
import { TextTitle } from "../Titles/TextTitle";
import styled from "styled-components";

const Mygrid = styled(Grid)`
  margin-top: 30px;
  margin-bottom: 30px;
`;

const ContainerSection = styled(Grid)`
    display:flex;
`;


export interface PresenterWebinarsProps {
  webinars: WebinarCardProps[];
}

const renderWebinars = ({ webinars }: PresenterWebinarsProps) => {
  return webinars.map(function(Webinar, index) {
    return (
        <WebinarCard
          id = { Webinar.id}
          key = {index}
          name = {Webinar.name}
          image = {Webinar.image}
          presenter = {Webinar.presenter}
          presenterImage = {Webinar.presenterImage}
          keywords = {Webinar.keywords}
          date = {Webinar.date}
          link = {Webinar.link}
          endDate = {Webinar.endDate}
        />
    );
  });
};

export const PresenterPageWebinars: FC<PresenterWebinarsProps> = ({
  webinars,
}) => {
  return (
    <ContainerSection container>
      <Container maxWidth="lg">
        <Mygrid
          container
          direction="row"
          justify="flex-start"
          alignItems="stretch"
          spacing={0}
        >
          <TextTitle title="وبینار ها" dir="right" />
          {renderWebinars({ webinars })}
        </Mygrid>
      </Container>
    </ContainerSection>
  );
};

export default PresenterPageWebinars;
