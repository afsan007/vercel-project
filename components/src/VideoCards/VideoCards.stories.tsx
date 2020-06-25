import React from "react";
import { VideoCards } from "./VideoCards";
import { VideoCardProps } from "../Card/VideoCard/VideoCard";

export default {
    title: "Section Components | VideoCards / VideoCards",
    component: VideoCards
};


export const Webinars = () => {
    const videos: VideoCardProps [] = [
    {   
        desc:"برگزاری آزمون آنلاین از گروه ؟" ,
        video: "https://as8.cdn.asset.aparat.com/aparat-video/ad3ac60ab5eabb29acb0f3c10d8bf19419820809-144p.mp4",
        duration: "1:37"
    },
    {   
        desc:"دسترسی به سوال های عمومی کنکور هنر در لرنیتو" ,
        video: "https://aspb2.cdn.asset.aparat.com/aparat-video/579d2812c6f5a2bce39ca1c3a9ec3fb27386709-144p.mp4",
        duration: "0:37"
    },
    {   
        desc:"چطور یک آزمون چاپی را به راحتی تصحیح کنیم؟" ,
        video: "https://hw5.cdn.asset.aparat.com/aparat-video/9d7d7dd88af07786ba90406c743048b414501458-144p.mp4",
        duration: "0:59"
    },
];
    return <VideoCards videos = {videos} />
};
