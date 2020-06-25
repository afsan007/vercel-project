import React from "react";
import { Services } from "./Services";
import { ServiceCardProps } from "../Card/ServicesCard/ServiceCard";

export default {
  title: "Section Components | Services / Services",
  component: Services,
};

const service: ServiceCardProps[] = [
  {
    name: "کتاب",
    description:
      "کتاب یکی از ابزار هایی که است می توان در لرنیتو به آن دسترسی داشت",
    image: "reader.png",
  },
  {
    name: "آزمون",
    description:
      "آزمون یکی از ابزار هایی که است می توان در لرنیتو به آن دسترسی داشت",
    image: "studio.png",
  },
  {
    name: "ویدیو",
    description:
      "ویدیو یکی از ابزار هایی که است می توان در لرنیتو به آن دسترسی داشت",
    image: "Store.png",
  },
];

export const ServicesStory = () => {
  return <Services services={service} loading={false} backgroundImg="HowTo.jpg" />;
};
