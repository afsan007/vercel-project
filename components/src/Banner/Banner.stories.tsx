import React from "react";
import { Banner } from "./Banner";

export default {
  title: "Section Components | Banner / Banner",
  component: Banner
};

export const MainPageBanner = () => {
  const renderAddItemLink = (children: JSX.Element) => <div>{children}</div>;
  return (
    <Banner
      title="درباره وبینار آوید"
      description="این سایت ابزاری برای برنامه ریزی و اجرای وبینارها برای عموم است. بسیاری از گویندگان Avid یا خارج از کشور می توانند وبینار خود را در اینجا اعلام کنند و ما بایگانی وبینارها و همچنین وبینارهای برنامه ریزی شده آینده را نشان می دهیم."
      linktitle="بیشتر بخوانید > "
      image = "Banner.jpg"
      loading = {false}
      linkWrapper={renderAddItemLink}
    />
  );
};
