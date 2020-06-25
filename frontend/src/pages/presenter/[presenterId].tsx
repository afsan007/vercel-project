import React, { FC } from "react";
import { NextPage } from "next";
import {
  PresenterDescSection,
  PresenterPageWebinars,
  WebinarCardProps,
} from "bp-components";
import { useRouter } from "next/router";
import Page from "$components/layout/Page";
import Link from "next/link";
import { withApollo } from "$withApollo";
import { GET_PRESENTER, GET_Specific_WebinarIds, GET_WEBINARS } from "$queries";
import { useQuery } from "@apollo/react-hooks";
import {
  getPresenters,
  getPresentersVariables,
} from "$gqlQueryTypes/getPresenters";
import {
  getSpecificWebinarIds,
  getSpecificWebinarIdsVariables,
} from "$gqlQueryTypes/getSpecificWebinarIds";
import { getWebinars, getWebinarsVariables } from "$gqlQueryTypes/getWebinars";

const renderWebinarLink = (children: JSX.Element, id: string) => {
  return (
    <Link href="/webinar/[webId]" as={`/webinar/${id}`}>
      {children}
    </Link>
  );
};

const fetchSpecificWebinar = (presentrId) => {
  let { data } = useQuery<
    getSpecificWebinarIds,
    getSpecificWebinarIdsVariables
  >(GET_Specific_WebinarIds, {
    variables: {
      query: {
        bool: {
          must: [{ match: { "Webinar.presenterId": presentrId } }],
          filter: [
            {
              term: { "schema.keyword": "Webinar" },
            },
          ],
        },
      },
      offset: 0,
      limit: 10,
    },
  });
  const ids = data?.search.items.map((item) => {
    return item._id;
  });
  return ids;
};

const fetchPresenter = (presenterId) => {
  const { loading, error, data } = useQuery<
    getPresenters,
    getPresentersVariables
  >(GET_PRESENTER, {
    variables: {
      PresenterIds: presenterId,
    },
  });

  return { loading, error, data };
};

const FetchWebinars = (id) => {
  const { data } = useQuery<getWebinars, getWebinarsVariables>(GET_WEBINARS, {
    variables: {
      Ids: id,
    },
  });

  let webinars = createWebinarData(data?.getWebinars);

  return { data: webinars };
};

const createWebinarData = (items) => {
  let webinars: WebinarCardProps[] = [];
  if (items) {
    webinars = items.map(function (item) {
      return {
        id: item._id,
        image: item.coverImageAddress,
        date: item.presentDate,
        name: item.title,
        presenter: item.presenterId.title,
        presenterImage: item.presenterId.profileImage,
        keywords: item.keywords,
        link: renderWebinarLink,
      };
    });
  }
  return webinars;
};

const Presenter: NextPage<FC> = () => {
  const router = useRouter();
  const presenterMetaData = fetchPresenter(router.query.presenterId);
  const descData = presenterMetaData.data?.getPresenters[0];
  const webinarId = fetchSpecificWebinar(router.query.presenterId);
  const webinars = FetchWebinars(webinarId);

  return (
    <Page>
      <PresenterDescSection
        prsenterUniversity={descData?.affiliation}
        prsenterImage={descData?.profileImage}
        prsenterName={descData?.title}
        prsenterEducation={descData?.fieldOfStudy}
        description={descData?.biography}
      />
      <PresenterPageWebinars webinars={webinars.data} />
    </Page>
  );
};

export default withApollo(Presenter);
