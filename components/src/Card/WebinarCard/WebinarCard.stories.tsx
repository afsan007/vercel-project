import React from "react";
import { WebinarCard } from "./WebinarCard";

export default {
  title: "ATOMS | Card / WebinarCard",
  component: WebinarCard,
};

const renderWebinarLink = (children: JSX.Element) => <a href="#">{children}</a>;

export const WebinarCardStory = () => {
  const keywords = ["graphql", "coding", "برنامه نویسی", "OOP"];
  return (
    <WebinarCard
      id="4564654654651"
      name="وبینار برای گراف کیوال"
      image="gph.png"
      presenter="سینا ماشینی"
      presenterImage="profile.jpg"
      keywords={keywords}
      date="2020-12-12T19:52:49"
      presenterId="445465456546"
      link={renderWebinarLink}
      presenterLink={renderWebinarLink}
      endDate = "2020-12-12T19:52:49"
    />
  );
};
