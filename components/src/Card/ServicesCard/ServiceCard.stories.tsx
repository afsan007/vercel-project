import React from "react";
import { ServiceCard } from "./ServiceCard";

export default {
  title: "ATOMS | Card / ServiceCard",
  component: ServiceCard,
};

export const ServiceCardStory = () => {
  return (
    <ServiceCard
      name="کتاب"
      description="کتاب یکی از ابزار هایی که است می توان در لرنیتو به آن دسترسی داشت"
      image="reader.png"
    />
  );
};
