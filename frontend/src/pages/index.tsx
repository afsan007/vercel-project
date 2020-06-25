import React, { FC } from "react";
import { NextPage } from "next";
import { withApollo } from "$withApollo";
import {
  GET_WEBINARIDS,
  GET_WEBINARS,
} from "$queries";
import { useQuery } from "@apollo/react-hooks";
import Page from "$components/layout/Page";
import {
  WebinarCardProps,
  UpComingWebinarsCarousel,
  LoadingData,
} from "bp-components";
import Link from "next/link";
import {
  getWebinarIds,
  getWebinarIdsVariables,
} from "$gqlQueryTypes/getWebinarIds";
import { getWebinars, getWebinarsVariables } from "$gqlQueryTypes/getWebinars";
import moment from "jalali-moment";
import { Scheduler } from '../components/Scheduler/Scheduler'
import { BannerComponent } from '../components/banner/Banner'
import { PresenterComponet } from '../components/presenter/Presenter'

const renderPresenterLink = (children: JSX.Element, id: string) => {
  return (
    <Link href="/presenter/[presenterId]" as={`/presenter/${id}`}>
      {children}
    </Link>
  );
};

const renderWebinarLink = (children: JSX.Element, id: string) => {
  return (
    <Link href="/webinar/[webId]" as={`/webinar/${id}`}>
      {children}
    </Link>
  );
};

const FetchWebinarsIds = () => {
  let { loading, error, data } = useQuery<
    getWebinarIds,
    getWebinarIdsVariables
  >(GET_WEBINARIDS, {
    variables: {
      parentId: "5ea559b3222115000aa8c02c",
      offset: 0,
      limit: 10,
    },
  });

  const ids = data?.search.items.map((item) => {
    return item._id;
  });
  return { loading, error, ids };
};


const FetchWebinars = (ids, idsIsLoading) => {
  const { loading, error, data } = useQuery<getWebinars, getWebinarsVariables>(
    GET_WEBINARS,
    {
      variables: {
        Ids: ids,
      },
      skip: idsIsLoading,
    }
  );
  let webinars;
  if (loading == false) {
    webinars = createWebinarData(data?.getWebinars);
  }
  return { loading, error, data: webinars };
};

const createWebinarData = (items) => {
  let newWebinars: WebinarCardProps[] = [];
  let oldWebinars: WebinarCardProps[] = [];

  if (items) {
    items.forEach((item?) => {
      if (moment().isBefore(moment(item?.presentDate))) {
        newWebinars.push({
          id: item._id,
          image: item.coverImageAddress,
          date: item.presentDate,
          name: item.title,
          presenter: item.presenterId.title,
          presenterImage: item.presenterId.profileImage,
          presenterId: item.presenterId._id,
          keywords: item.keywords,
          endDate: item.presentEndDate,
          presenterLink: renderPresenterLink,
          link: renderWebinarLink,
        });
      } else {
        oldWebinars.push({
          id: item._id,
          image: item.coverImageAddress,
          date: item.presentDate,
          name: item.title,
          presenter: item.presenterId.title,
          presenterImage: item.presenterId.profileImage,
          presenterId: item.presenterId._id,
          keywords: item.keywords,
          endDate: item.presentEndDate,
          presenterLink: renderPresenterLink,
          link: renderWebinarLink,
        });
      }
    });
    return { oldWebinars, newWebinars };
  }
};


const Home: NextPage<FC> = () => {
  const webinarIds = FetchWebinarsIds();
  const webinars = FetchWebinars(webinarIds.ids, webinarIds.loading);
  const loading = webinarIds.loading || webinars.loading 
  return (
    <Page>
      <LoadingData loading={loading}>
        {() => {
          return (
            <>
              <BannerComponent />
              <Scheduler />
              <UpComingWebinarsCarousel
                Webinars={webinars.data.newWebinars}
                title="وبینارهای آینده"
                color="#ededed"
              />
              <PresenterComponet />
              <UpComingWebinarsCarousel
                Webinars={webinars.data.oldWebinars}
                title="وبینارهای گذشته"
                color="#ededed"
              />
            </>
          );
        }}
      </LoadingData>
    </Page>
  );
};

export default withApollo(Home);
