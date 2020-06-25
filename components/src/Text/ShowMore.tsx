import React, { useState, FC } from "react";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

const ShowMoreButton = styled.a`
  color: #91bfd9;
  cursor: pointer;
  &:hover {
    color: black;
  }
`;

const TextArea = styled.div`
  font-family: "IRANSans";
`;

export interface ShowMoreTextProps {
  text?: string | undefined | null;
}

const createShorterText = (text) => {
  const [showMore, setShowMore] = useState(false);
  let newText = <TextArea>{text}</TextArea>;
  if (text.length > 400 && showMore === false) {
    let shortText = text.substring(0, 400);
    newText = (
      <TextArea>
        <span>{shortText}</span>...
        <ShowMoreButton onClick={() => setShowMore(true)}>بیشتر</ShowMoreButton>
      </TextArea>
    );
  }
  return newText;
};

export const ShowMoreText: FC<ShowMoreTextProps> = ({ text }) => {
  return (
    <Typography variant="body1" gutterBottom>
      {createShorterText(text)}
    </Typography>
  );
};

export default ShowMoreText;
