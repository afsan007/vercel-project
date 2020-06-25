import React from "react";
import { SimplePresenter } from "./SimplePresenter";

export default {
  title: "ATOMS | Card / SimplePresenterCard",
  component: SimplePresenter,
};

const renderPresenterLink = (children: JSX.Element) => (
  <a href="#">{children}</a>
);

export const Presenter = () => {
  return (
    <SimplePresenter
      id="4564654654634"
      name="سینا ماشینی"
      education="دانشگاه آزاد"
      image="profile.jpg"
      link={renderPresenterLink}
    />
  );
};
