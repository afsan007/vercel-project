import React from "react";
import { VideoCard } from "./VideoCard";

export default {
    title: "ATOMS | Card / VideoCard",
    component: VideoCard
};

export const WebinarCardStory = () => {
    return <VideoCard  
        desc="برگزاری آزمون آنلاین از گروه ؟" 
        video = "https://as8.cdn.asset.aparat.com/aparat-video/ad3ac60ab5eabb29acb0f3c10d8bf19419820809-144p.mp4"
        duration="1:37"/>
};