import React from "react";
import { OtherFileCards } from "./OtherFileCards";
import { OtherFileCardProps } from "../Card/OtherFilesCard/OtherFile";

export default {
    title: "Section Components | OtherFileCards / OtherFileCards",
    component: OtherFileCards
};

const files: OtherFileCardProps [] = [
    {   
        title:"درس اول گراف کیو ال",
        type:"PDF" ,
        src: "https://google.com",
        image: "File.jpg",
    },
    {   
        title:"درس دوم گراف کیو ال",
        type:"JPG" ,
        src: "https://google.com",        
    },
    {   
        title:"درس سوم گراف کیو ال",
        type:"PDF" ,
        src: "https://google.com",
        image: "File.jpg",
    },
];

export const Webinars = () => {
    return <OtherFileCards files = {files} />
};
