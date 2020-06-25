import React, { FC, ReactElement } from 'react';
import { CircularProgress, Grid, Card, CardHeader, Box } from '@material-ui/core';
import { ApolloError } from 'apollo-client';
import ErrorRoundedIcon from '@material-ui/icons/ErrorRounded';
import styled from "styled-components";


const LoadingGrid = styled(Grid)`
  margin-top:400px
`

export interface Props {
  loading: boolean;
  error?: ApolloError;
  children(): ReactElement<any>;
}

export const LoadingData: FC<Props> = (props) => {
  if (props.loading || props.error) {
    return (
      <LoadingGrid container justify="center">
        <Box m={4}>
          {props.loading ? (
            <CircularProgress />
          ) : props.error ? (
            <Card>
              <CardHeader
                avatar={<ErrorRoundedIcon fontSize="large" color="error" />}
                title={props.error.message || 'Could not load data'}
              />
            </Card>
          ) : null}
        </Box>
      </LoadingGrid>
    );
  }
  return <>{props.children()}</>;
};
