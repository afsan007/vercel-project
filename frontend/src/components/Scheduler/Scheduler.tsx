import React, { FC, useState } from "react";
import { useQuery } from '@apollo/react-hooks';
import { ScheduleCalendar, ScdulerData } from 'bp-components'
import styled from "styled-components";
import { withApollo } from "$withApollo";
import { GET_WEBINARSIDSWITHDATE, GET_WEBINARS  } from '$queries';
import { getWebinarsIdsWithDate, getWebinarsIdsWithDateVariables } from "$gqlQueryTypes/getWebinarsIdsWithDate";
import { getWebinars, getWebinarsVariables } from "$gqlQueryTypes/getWebinars";
import Link from "next/link";

const MyDiv = styled.div`
   font-family: "IRANSans"
`

const renderWebinarLink = (children: JSX.Element, id: string) => {
    return (
      <Link href="/webinar/[webId]" as={`/webinar/${id}`}>
        {children}
      </Link>
    );
  };

  const renderPresenterLink = (children: JSX.Element, id: string) => {
    return (
      <Link href="/presenter/[presenterId]" as={`/presenter/${id}`}>
        {children}
      </Link>
    );
  };
  

  const fetchWebinarsIds = (startDate: Date, endDate: Date) =>
  {   
    const query = {
         "range":
          {
           "Webinar.presentDate": 
            { 
            "gte": startDate.toISOString().split('T')[0],
            "lte": endDate.toISOString().split('T')[0] 
             }
          }
        }
    const { loading, error, data  } = useQuery<getWebinarsIdsWithDate, getWebinarsIdsWithDateVariables>(GET_WEBINARSIDSWITHDATE, {
      variables: {
        query: query
      },
    });   
    const ids = data?.search.items.map((item) => {
        return item._id;
      });
    return { loading, error, data: ids };
  };



const fetchWebinars = (ids, idsIsLoading) =>
{  
  const { loading, error, data  } = useQuery<getWebinars, getWebinarsVariables>(GET_WEBINARS, {
    variables: {
      Ids: ids
    },
    skip: idsIsLoading || !ids
  });   
  let webinars ;
  if(loading == false){
    webinars = createWebinarData(data?.getWebinars)
  }
  return { loading, error, data: webinars };
};

const createWebinarData = (items) => {
  let webinars: ScdulerData[] = [];
  if (items) {
    webinars = items.map(function (item) {
      return {
        id: item._id,
        image: item.coverImageAddress,
        startDate: item.presentDate,
        endDate: item.presentEndDate,
        title: item.title,
        presenterName: item.presenterId.title,
        presenterId: item.presenterId._id,
        presenterLink: renderPresenterLink,
        webinarLink: renderWebinarLink,
      };
    });
  }
  return webinars;
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

export const Scheduler: FC = () => {
   // const [limit ,setLimit] =useState(7); //TODO for filterng of month or day and week
    const limit = 7;
    const [currentDate, setCurrentDate] = useState(new Date());
    const next = () => handleNextAndPrev( limit, currentDate, setCurrentDate, true);
    const prev = () => handleNextAndPrev( limit, currentDate, setCurrentDate, false);
    const webinarIds = fetchWebinarsIds(addDaysToDate(currentDate, - limit),addDaysToDate(currentDate,  limit ));
    const webinars = fetchWebinars(webinarIds.data, webinarIds.loading);
    const loading = webinarIds.loading || webinars.loading;
    return (<MyDiv><ScheduleCalendar 
        currentDate = {currentDate}
        next = {next}
        prev = {prev}
        setCurrnetDate = {setCurrentDate}
        SchedulerData = {webinars.data}
        loading = {loading}
        /></MyDiv>);
}


export default withApollo(Scheduler)