import React from "react";
import { OtherFileCard } from "./OtherFile";

export default {
    title: "ATOMS | Card / OtherFileCard",
    component: OtherFileCard
};

export const OtherFileCardStories = () => {
    return <OtherFileCard  
        title="درس اول گراف کیو ال"
        type="PDF" 
        src = "https://google.com"
        image = "File.jpg"
        />
};