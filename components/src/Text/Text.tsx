import React from "react";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";

export interface TextProps {
  title: string;
  description: string;
  linktitle: string;
  linkWrapper: (children: JSX.Element) => JSX.Element;
}

const Root = styled.div`
  font-family: "IRANSans";
  color: #ffffff;
  font-size: 24px;
`;

const Description = styled.div`
  font-family: "IRANSans";
  color: #ededed;
  font-size: 16px;
`;

// const ShowMore = styled(Grid)`
//   font-size: 16px;
//   color: #ffce73;
//   padding-top: 20px;
// `;

// const LinkTitle = styled.a`
//   a:link {
//     text-decoration: none;
//     color: #ffce73;
//   }
//   :hover {
//     text-decoration: none;
//     cursor: pointer;
//   }
// `;

export const Text = ({
  title,
  description,
  linktitle,
  linkWrapper
}: TextProps) => {
  return (
    <Root>
      <Grid
        container
        direction="column"
        justify="space-evenly"
        alignItems="flex-start"
      >
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <h5>{title}</h5>
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Description>{description}</Description>
        </Grid>

        {/* <ShowMore item xl={12} lg={12} md={12} sm={12} xs={12}>
          {linkWrapper(<LinkTitle>{linktitle}</LinkTitle>)}
        </ShowMore> */}
      </Grid>
    </Root>
  );
};
export default Text;
