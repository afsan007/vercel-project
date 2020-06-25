import React, { FC } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import {
  VideoCards,
  VideoCardProps,
  WebinarDescSection,
  OtherFileCardProps,
  OtherFileCards,
  WebinarCardProps,
  WebinarCarousel,
  LoadingData,
} from "bp-components";
import Page from "$components/layout/Page";
import {
  getWebinarIds,
  getWebinarIdsVariables,
} from "$gqlQueryTypes/getWebinarIds";
import { withApollo } from "$withApollo";
import { GET_WEBINARS, GET_WEBINARIDS } from "$queries";
import { useQuery } from "@apollo/react-hooks";
import { getWebinars, getWebinarsVariables } from "$gqlQueryTypes/getWebinars";
import Link from "next/link";

const fetchWebinar = (webinarId) => {
  const { loading, error, data } = useQuery<getWebinars, getWebinarsVariables>(
    GET_WEBINARS,
    {
      variables: {
        Ids: webinarId,
      },
    }
  );
  return { loading, error, data };
};

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

const filterVideosAndFiles = (attachments, loading) => {
  let files: OtherFileCardProps[] = [];
  let videos: VideoCardProps[] = [];
  let videosAndFiles = { files, videos };
  if (loading) return videosAndFiles;

  attachments.forEach((attachment) => {
    if (attachment.Kind === "video") {
      videos.push({
        desc: attachment.Title,
        duration: attachment.Duration,
        video: attachment.URL,
      });
    } else {
      files.push({
        title: attachment.Title,
        type: attachment.format,
        src: attachment.URL,
        image: attachment.Thumbnail,
      });
    }
  });

  return (videosAndFiles = { files, videos });
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

const FetchWebinars = (ids, idsIsLoading, currentWebId) => {
  let newIds: any = [];
  if (ids) {
    ids.map((id) => {
      if (id != currentWebId) newIds.push(id);
    });
  }
  const { loading, error, data } = useQuery<getWebinars, getWebinarsVariables>(
    GET_WEBINARS,
    {
      variables: {
        Ids: newIds,
      },
      skip: idsIsLoading,
    }
  );
  let webinars;
  if (loading === false) {
    webinars = createWebinarData(data?.getWebinars);
  }
  return { loading, error, data: webinars };
};

const createWebinarData = (items) => {
  let webinars: WebinarCardProps[] = [];

  if (items) {
    webinars = items.map(function (item) {
      return {
        id: item._id,
        image: item.coverImageAddress,
        date: item.presentDate,
        endDate: item.presentEndDate,
        name: item.title,
        presenter: item.presenterId.title,
        presenterImage: item.presenterId.profileImage,
        presenterId: item.presenterId._id,
        keywords: item.keywords,
        webinarLink: item.webinarLink,
        presenterLink: renderPresenterLink,
        link: renderWebinarLink,
      };
    });
  }
  return webinars;
};

const Webinar: NextPage<FC> = () => {
  const router = useRouter();
  console.log(window.location.hostname);
  const webinarMetaData = fetchWebinar(router.query.webId);
  const descData = webinarMetaData.data?.getWebinars[0];
  const attachments = filterVideosAndFiles(
    webinarMetaData.data?.getWebinars[0].Attachment,
    webinarMetaData.loading
  );

  const webinarIds = FetchWebinarsIds();
  const webinars = FetchWebinars(
    webinarIds.ids,
    webinarIds.loading,
    router.query.webId
  );
  const loading =
    webinarIds.loading || webinarMetaData.loading || webinars.loading;
  return (
    <Page>
      <LoadingData loading={loading}>
        {() => {
          return (
            <>
              <WebinarDescSection
                title={descData?.title}
                image={descData?.coverImageAddress}
                prsenterImage={descData?.presenterId?.profileImage}
                prsenterName={descData?.presenterId?.title}
                prsenterEducation={descData?.presenterId?.affiliation}
                keywords={descData?.keywords}
                description={descData?.description}
                loading={webinarMetaData.loading}
                presenterLink={renderPresenterLink}
                startDate={descData?.presentDate}
                endDate={descData?.presentEndDate}
                presenterId={descData?.presenterId?._id}
                webinarLink={descData?.webinarLink}
              />
              <VideoCards videos={attachments.videos} />
              <OtherFileCards files={attachments.files} />
              <WebinarCarousel Webinars={webinars.data} />
            </>
          );
        }}
      </LoadingData>
    </Page>
  );
};

export default withApollo(Webinar);
