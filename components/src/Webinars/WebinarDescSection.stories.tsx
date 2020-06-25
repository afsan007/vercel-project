import React from "react";
import { WebinarDescSection } from "./WebinarDescSection";

export default {
  title: "Section Components | Webinar / WebinarDescSection ",
  component: WebinarDescSection,
};

const keywords = ["graphql", "coding", "برنامه نویسی", "OOP"];

const desc = `GraphQL یک پرس و جوی داده ای منبع باز و زبان دستکاری برای API ها است. همچنین یک زمان اجرا برای پاسخ دادن به پرس و جوها با استفاده از داده های موجود است. GraphQL در سال 2012 توسط Facebook توسعه یافت و سپس در سال 2015 به صورت عمومی منتشر شد. این زبان یک رویکرد کار آمد، قدرتمند و انعطاف پذیر را برای توسعه API های وب فراهم می کند و با REST و سایر معماری های سرویس وب مقایسه می شود و در تقابل است. GraphQL از خواندن، نوشتن یا همان تویض و اشتراک گذاری تغییرات در داده ها (به روز رسانی در زمان واقعی) پشتیبانی می کند.
`;

const renderPresenterLink = (children: JSX.Element) => (
  <a href="#">{children}</a>
);

export const DescSection = () => {
  return (
    <WebinarDescSection
      title="وبینار برای گراف کیوال"
      image="gph.png"
      prsenterImage="profile.jpg"
      prsenterName="سینا ماشینی"
      prsenterEducation="دانشگاه آزاد"
      keywords={keywords}
      description={desc}
      loading={false}
      presenterId="ds55655356465"
      startDate="2020-06-14T00:10:49"
      endDate="2020-06-14T19:52:49"
      webinarLink="https://nightly.lernito.com"
      presenterLink={renderPresenterLink}
    />
  );
};
