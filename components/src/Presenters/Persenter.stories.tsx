import React from "react";
import { Presnter } from "./Presenter";
import { SimplePresenterProps } from "../Card/SimplePresenterCard/SimplePresenter";

export default {
  title: "Section Components | Presenters / Presenters",
  component: Presnter,
};

const renderPresenterLink = (children: JSX.Element) => (
  <a href="#">{children}</a>
);

const presnters: SimplePresenterProps[] = [
  {
    id: "4564654654651",
    name: "سینا ماشینی",
    education: "دانشگاه آزاد",
    image: "profile.jpg",
    link: renderPresenterLink,
  },
  {
    id: "4564654654651fd651",
    name: "سینا ماشینی",
    education: "دانشگاه آزاد",
    image: "profile.jpg",
    link: renderPresenterLink,
  },
  {
    id: "4564654654fdf651",
    name: "سینا ماشینی",
    education: "دانشگاه آزاد",
    image: "profile.jpg",
    link: renderPresenterLink,
  },
  {
    id: "4564654654fdffdfsd651",
    name: "سینا ماشینی",
    education: "دانشگاه آزاد",
    image: "profile.jpg",
    link: renderPresenterLink,
  },
];

export const Presenter = () => {
  return <Presnter presnters={presnters} />;
};
