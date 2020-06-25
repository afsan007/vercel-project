import React, { FC } from "react"; 
import styled from "styled-components";
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';

const CircleKeyWords = styled(Chip)`
    font-family: "IRANSans";
    font-size:10px;
    background-color: #bde1f6;
    margin-left:5px;
    margin-bottom:5px;
    font-size: 10px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.41px;
    color: #323232;
`;

export interface keyWordsProps {
    keywords?: string[] | undefined;
}

export const WebinarKeyWords: FC<keyWordsProps> = ({ keywords }) => {
    let webinarKeyWordss  = [<div></div>];
    if (keywords){
        webinarKeyWordss = keywords.map(function (keyword, index) {
            return <CircleKeyWords key = { index } label = { keyword } />
        });
   }

    return (
        <Grid>
            { webinarKeyWordss }
        </Grid>
    );          
};

export default WebinarKeyWords;
