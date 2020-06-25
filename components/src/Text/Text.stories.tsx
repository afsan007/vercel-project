import React from "react";
import { Text } from "./Text";

export default {
  title: "ATOMS | Text / Description",
  component: Text
};

export const BannerText = () => {
  const renderAddItemLink = (children: JSX.Element) => <div>{children}</div>;
  return (
    <Text
      title="درباره وبینار آوید"
      description="این سایت ابزاری برای برنامه ریزی و اجرای وبینارها برای عموم است. بسیاری از گویندگان Avid یا خارج از کشور می توانند وبینار خود را در اینجا اعلام کنند و ما بایگانی وبینارها و همچنین وبینارهای برنامه ریزی شده آینده را نشان می دهیم."
      linktitle="بیشتر بخوانید >"
      linkWrapper={renderAddItemLink}
    />
  );
};
