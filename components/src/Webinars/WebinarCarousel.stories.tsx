import React from "react";
import { WebinarCarousel } from "./WebinarCarousel";
import { WebinarCardProps } from "../Card/WebinarCard/WebinarCard";

export default {
  title: "Section Components | Webinar / WebinarCarousel ",
  component: WebinarCarousel,
};

const renderWebinarLink = (children: JSX.Element) => <a href="#">{children}</a>;

export const Webinars = () => {
  const Webinars: WebinarCardProps[] = [
    {
      id: "4564654654651",
      name: "1وبینار برای گراف کیوال",
      image: "gph.png",
      presenter: "سینا ماشینی",
      presenterImage: "profile.jpg",
      keywords: ["OOP", "Grphql", "Programmig", "برنامه نویسی"],
      date: "2020-12-12T19:52:49",
      presenterId: "445465456546",
      link: renderWebinarLink,
      presenterLink: renderWebinarLink,
      endDate: "2020-12-12T19:52:49"
    },
    {
      id: "4564654654651",
      name: "2وبینار برای گراف کیوال",
      image: "gph.png",
      presenter: "سینا ماشینی",
      presenterImage: "profile.jpg",
      keywords: ["OOP", "Grphql", "Programmig", "برنامه نویسی"],
      date: "2019-12-12T19:52:49",
      presenterId: "445465456546",
      link: renderWebinarLink,
      presenterLink: renderWebinarLink,
      endDate: "2020-12-12T19:52:49"
    },
    {
      id: "4564654654651",
      name: "3وبینار برای گراف کیوال",
      image: "gph.png",
      presenter: "سینا ماشینی",
      presenterImage: "profile.jpg",
      keywords: ["OOP", "Grphql", "Programmig", "برنامه نویسی"],
      date: "2019-12-12T19:52:49",
      presenterId: "445465456546",
      link: renderWebinarLink,
      presenterLink: renderWebinarLink,
      endDate: "2020-12-12T19:52:49"
    },
    {
      id: "4564654654651",
      name: "4وبینار برای گراف کیوال",
      image: "gph.png",
      presenter: "سینا ماشینی",
      presenterImage: "profile.jpg",
      keywords: ["OOP", "Grphql", "Programmig", "برنامه نویسی"],
      date: "2020-02-12T19:52:49",
      presenterId: "445465456546",
      link: renderWebinarLink,
      presenterLink: renderWebinarLink,
      endDate: "2020-12-12T19:52:49"
    },
    {
      id: "4564654654651",
      name: "5وبینار برای گراف کیوال",
      image: "gph.png",
      presenter: "سینا ماشینی",
      presenterImage: "profile.jpg",
      keywords: ["OOP", "Grphql", "Programmig", "برنامه نویسی"],
      date: "2020-12-12T19:52:49",
      presenterId: "445465456546",
      link: renderWebinarLink,
      presenterLink: renderWebinarLink,
      endDate: "2020-12-12T19:52:49"
    },
    {
      id: "64564654654fdf651",
      name: "6وبینار برای گراف کیوال",
      image: "gph.png",
      presenter: "سینا ماشینی",
      presenterImage: "profile.jpg",
      keywords: ["OOP", "Grphql", "Programmig", "برنامه نویسی"],
      date: "2020-12-14T19:52:49",
      presenterId: "445465456546",
      link: renderWebinarLink,
      presenterLink: renderWebinarLink,
      endDate: "2020-12-12T19:52:49"
    },
    {
      id: "4564654654fdffdfsd651",
      name: "وبینار برای7 گراف کیوال",
      image: "gph.png",
      presenter: "سینا ماشینی",
      presenterImage: "profile.jpg",
      keywords: ["OOP", "Grphql", "Programmig", "برنامه نویسی"],
      date: "2020-12-12T19:52:49",
      presenterId: "445465456546",
      link: renderWebinarLink,
      presenterLink: renderWebinarLink,
      endDate: "2020-12-12T19:52:49"
    },
    {
      id: "4564654654fdffdfsd651",
      name: "وبینار برای8 گراف کیوال",
      image: "gph.png",
      presenter: "سینا ماشینی",
      presenterImage: "profile.jpg",
      keywords: ["OOP", "Grphql", "Programmig", "برنامه نویسی"],
      date: "2020-12-12T19:52:49",
      presenterId: "445465456546",
      link: renderWebinarLink,
      presenterLink: renderWebinarLink,
      endDate: "2020-12-12T19:52:49"
    },
  ];
  return <WebinarCarousel Webinars={Webinars} />;
};
