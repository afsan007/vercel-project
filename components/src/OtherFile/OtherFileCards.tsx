import React, { FC } from "react";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { OtherFileCard, OtherFileCardProps } from '../Card/OtherFilesCard/OtherFile';
import {TextTitle} from "../Titles/TextTitle";
import styled from "styled-components";


const ContainerSection = styled(Grid)`
    background-color: #ffffff;
`;

const FileSectionTitle = styled.div`
  margin: 30px 50px 50px 0px;
  @media (max-width: 768px) {
    margin-right: 0px;
  }
`

const Mygrid = styled(Grid)`
    margin-top:30px;
    margin-bottom: 30px
`
export interface OtherFileCardsProps {
    files?: OtherFileCardProps[]
    };

const renderFiles = ({ files }: OtherFileCardsProps) => {
      if (!files) return <></>;
      return files.map(function (file, index) {
        return(             
          <Grid key = {index} item xl={3} lg={3} md={3} sm={4} xs={12} >
              <OtherFileCard
                    key = {index}   
                    type = {file.type}
                    title = {file.title}
                    src = { file.src}
                    image = {file.image}              
                />
            </Grid>
              );
  });
}

export const OtherFileCards: FC<OtherFileCardsProps> = ({files}) => {
  if(!files || files.length === 0) return <></>;
  return (   
        <ContainerSection
            container
        >
          <Container maxWidth="lg">
            <FileSectionTitle>
              <TextTitle title = "فایل ها" dir = "right" />
            </FileSectionTitle>
            <Mygrid
              container
              direction="row"
              justify="flex-start"
              alignItems="center"
              spacing={0}
            >
              {renderFiles({files})}   
            </Mygrid> 
          </Container>                       
        </ContainerSection>
  );
};

export default OtherFileCards;
