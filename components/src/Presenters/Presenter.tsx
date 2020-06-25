import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import styled from "styled-components";
import { TextTitle } from "../Titles/TextTitle";
import { LoadingData } from "../Progress/LoadingData";
import {
  SimplePresenter,
  SimplePresenterProps,
} from "../Card/SimplePresenterCard/SimplePresenter";

const BodyContainer = styled(Container)`
  margin-top: 35px;
  margin-bottom: 55px;
`;

const BodyGrid = styled(Grid)`
  margin-top: 55px;
`;

export interface PresnterProps {
  presnters: SimplePresenterProps[];
  loading?: boolean;
}

const renderPresenters = ({ presnters }: PresnterProps) => {
  return presnters.map(function(presenter, index) {
    return (
      <Grid item key={index} xl={3} lg={3} md={3} sm={3} xs={12}>
        <SimplePresenter
          key={index}
          id={presenter.id}
          name={presenter.name}
          education={presenter.education}
          image={presenter.image}
          link={presenter.link}
        />
      </Grid>
    );
  });
};

export const Presnter = ({ presnters, loading = false }: PresnterProps) => {
  return (
    <LoadingData loading={loading}>
      {() => {
        return (
          <BodyContainer maxWidth="md">
            <TextTitle title="ارائه دهندگان" dir="center" />
            <BodyGrid
              item
              xs={12}
              container
              direction="row"
              justify="center"
              alignItems="flex-start"
            >
              {renderPresenters({ presnters })}
            </BodyGrid>
          </BodyContainer>
        );
      }}
    </LoadingData>
  );
};

export default Presnter;
