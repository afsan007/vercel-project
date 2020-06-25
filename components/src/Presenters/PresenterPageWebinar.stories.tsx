import React from "react";
import { PresenterPageWebinars } from "./PresenterPageWebinar";
import { WebinarCardProps } from "../Card/WebinarCard/WebinarCard";

export default {
  title: "Section Components | Presenters / PresenterPageWebbbinars ",
  component: PresenterPageWebinars,
};

const renderWebinarLink = (children: JSX.Element) => <a href="#">{children}</a>;

export const PresenterWebbbinars = () => {
  const webinars: WebinarCardProps[] = [
    {
      id: "6545645646565",
      name: "وبینار برای گراف کیوال",
      image: "gph.png",
      presenter: "سینا ماشینی",
      presenterImage: "profile.jpg",
      keywords: ["OOP", "Grphql", "Programmig", "برنامه نویسی"],
      date: "1.10.1399",
      link: renderWebinarLink,
      endDate: "1.10.1399"
    },
    {
      id: "6545645646565",
      name: "وبینار برای گراف کیوال",
      image: "gph.png",
      presenter: "سینا ماشینی",
      presenterImage: "profile.jpg",
      keywords: ["OOP", "Grphql", "Programmig", "برنامه نویسی"],
      date: "1.10.1399",
      link: renderWebinarLink,
      endDate: "1.10.1399"
    },
    {
      id: "6545645646565",
      name: "وبینار برای گراف کیوال",
      image: "gph.png",
      presenter: "سینا ماشینی",
      presenterImage: "profile.jpg",
      keywords: ["OOP", "Grphql", "Programmig", "برنامه نویسی"],
      date: "1.10.1399",
      link: renderWebinarLink,
      endDate: "1.10.1399"
    },
    {
      id: "6545645646565",
      name: "وبینار برای گراف کیوال",
      image: "gph.png",
      presenter: "سینا ماشینی",
      presenterImage: "profile.jpg",
      keywords: ["OOP", "Grphql", "Programmig", "برنامه نویسی"],
      date: "1.10.1399",
      link: renderWebinarLink,
      endDate: "1.10.1399"
    },
    {
      id: "6545645646565",
      name: "وبینار برای گراف کیوال",
      image: "gph.png",
      presenter: "سینا ماشینی",
      presenterImage: "profile.jpg",
      keywords: ["OOP", "Grphql", "Programmig", "برنامه نویسی"],
      date: "1.10.1399",
      link: renderWebinarLink,
      endDate: "1.10.1399"
    },
    {
      id: "6545645646565",
      name: "وبینار برای گراف کیوال",
      image: "gph.png",
      presenter: "سینا ماشینی",
      presenterImage: "profile.jpg",
      keywords: ["OOP", "Grphql", "Programmig", "برنامه نویسی"],
      date: "1.10.1399",
      link: renderWebinarLink,
      endDate: "1.10.1399"
    },
  ];
  return <PresenterPageWebinars webinars={webinars} />;
};
