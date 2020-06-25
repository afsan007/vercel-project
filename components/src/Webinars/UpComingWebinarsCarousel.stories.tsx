import React from "react";
import { UpComingWebinarsCarousel } from "./UpComingWebinarsCarousel";
import { WebinarCardProps } from "../Card/WebinarCard/WebinarCard";

export default {
  title: "Section Components | Webinar / UpCommingWebinars ",
  component: UpComingWebinarsCarousel,
};

const renderWebinarLink = (children: JSX.Element) => <a href="#">{children}</a>;

export const Webinars = () => {
  const Webinars: WebinarCardProps[] = [
    {
      id: "4564654654651",
      name: "وبینار برای گراف کیوال",
      image: "gph.png",
      presenter: "سینا ماشینی",
      presenterImage: "profile.jpg",
      keywords: ["OOP", "Grphql", "Programmig", "برنامه نویسی"],
      date:"2019-12-12T19:52:49",
      link: renderWebinarLink,
      presenterId: "445465456546",
      presenterLink: renderWebinarLink,
      endDate:"2019-12-24T19:52:49",
    },
    {
      id: "4564654654fdf651",
      name: "وبینار برای گراف کیوال",
      image: "gph.png",
      presenter: "سینا ماشینی",
      presenterImage: "profile.jpg",
      keywords: ["OOP", "Grphql", "Programmig", "برنامه نویسی"],
      date:"2020-12-12T19:52:49",
      link: renderWebinarLink,
      presenterId: "445465456546",
      presenterLink: renderWebinarLink,
      endDate:"2019-12-24T19:52:49",
    },
    {
      id: "4564654654fdffdfsd651",
      name: "وبینار برای گراف کیوال",
      image: "gph.png",
      presenter: "سینا ماشینی",
      presenterImage: "profile.jpg",
      keywords: ["OOP", "Grphql", "Programmig", "برنامه نویسی"],
      date:"2021-12-12T19:52:49",
      link: renderWebinarLink,
      presenterId: "445465456546",
      presenterLink: renderWebinarLink,
      endDate:"2019-12-24T19:52:49",
    },
  ];
  return (
    <UpComingWebinarsCarousel
      Webinars={Webinars}
      title="وبینار های آینده"
      color="#ededed"
    />
  );
};
