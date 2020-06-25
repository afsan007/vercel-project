
import React from "react";
import { WebinarKeyWords } from "./KeyWords";

export default {
    title: "ATOMS | Keywords / WebinarKeyWords",
    component: WebinarKeyWords
};

export const Keywords = () => {
    const keywords = ["graphql", "coding", "برنامه نویسی", "OOP"];
    return <WebinarKeyWords keywords={keywords} />
};

