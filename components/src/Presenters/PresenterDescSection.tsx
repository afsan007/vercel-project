import React, { FC } from "react";
import Grid from "@material-ui/core/Grid";
import { PresenterDescription } from "./PresenterDescription";
import styled from "styled-components";

const MyConatiner = styled(Grid)`
  min-height: 416px;
  background-color: #a4d3ef;
`;
const MyGrid = styled(Grid)`
  margin: 0 auto;
  margin-top: 140px;
  margin-bottom: 20px;
`;

export interface PresenterDescSectionProps {
  prsenterUniversity?: string | undefined | null;
  prsenterName?: string | undefined | null;
  prsenterImage?: string | undefined | null;
  prsenterEducation?: string | undefined | null;
  description?: string | undefined | null;
}

export const PresenterDescSection: FC<PresenterDescSectionProps> = (props) => {
  return (
    <MyConatiner container>
      <MyGrid>
        <PresenterDescription
          prsenterUniversity={props.prsenterUniversity}
          description={props.description}
          prsenterName={props.prsenterName}
          prsenterImage={props.prsenterImage}
          prsenterEducation={props.prsenterEducation}
        />
      </MyGrid>
    </MyConatiner>
  );
};
