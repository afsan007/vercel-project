import React, {useState} from 'react';
import { ScheduleCalendar, ScdulerData } from './ScheduleCalendar';

const sampleLink = (children: JSX.Element,id:string) => <a href="#">{children}</a>;

const schedulerData: ScdulerData[] = [
  { startDate: '2020-05-01T09:45', endDate: '2020-05-01T11:00', title: 'وبینار گراف کیوال',id:"54646566546", image: "gph.png", presenterName:"سینا ماشینی" ,presenterId:"565656465465",presenterLink: sampleLink,webinarLink: sampleLink},
  { startDate: '2020-05-31T09:00', endDate: '2020-05-31T13:00', title: 'وبینار معرفی گراف کیو ال',id:"879789798", image: "gph.png",presenterName:"سروش جوادی", presenterId:"565656465465",presenterLink: sampleLink, webinarLink: sampleLink },
];

export default {
    title: "ATOMS | Calendar / ScheduleCalendar",
    component: ScheduleCalendar,
  };

  const addDaysToDate = (date, days) =>
  {
   let result = new Date(date);
   result.setDate(result.getDate() + days);
   return result;
  } 
  
  const handleNextAndPrev = (limit, date, setCurrentDate, isNext) =>
  {
    const count = (isNext) ? limit :  - limit;
    const newDate = addDaysToDate(date ,count);
    setCurrentDate(newDate);
  }

  export const ScheduleStory = () => {
    const limit = 7
    const [currentDate, setCurrentDate] = useState(new Date("2020-05-31"));
    const next = () => handleNextAndPrev(limit, currentDate,setCurrentDate, true)
    const prev = () => handleNextAndPrev(limit, currentDate,setCurrentDate, false)
    return <ScheduleCalendar 
        currentDate = {currentDate}
        next = {next}
        prev = {prev}
        setCurrnetDate = {setCurrentDate}
        SchedulerData = {schedulerData}
        loading = {false}
        />;
  };
  