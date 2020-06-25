import React , { FC } from 'react'
import {getServicesIds, getServicesIdsVariables} from "$gqlQueryTypes/getServicesIds";
import { getServices, getServicesVariables } from "$gqlQueryTypes/getServices";
import { GET_SERVICESIDS,GET_SERVICES } from "$queries";
import { useQuery } from "@apollo/react-hooks";
import { Banner, ServiceCardProps, LoadingData } from 'bp-components'
import Link from "next/link";

const renderAddItemLink = (children: JSX.Element) => (
    <Link href="/">{children}</Link>
  );

const fetchGenralServicesIds = () => {
    const { loading, error, data } = useQuery<
      getServicesIds,
      getServicesIdsVariables
    >(GET_SERVICESIDS, {
      variables: {
        parentId: "5eb7d2a1dad91000081488ec",
        offset: 0,
        limit: 20,
      },
    });
    const ids = data?.search.items.map((item) => {
      return item._id;
    });
    return { loading, error, ids };
  };

  const fetchAllServices = (ids, servicesIdsloading) => {
    const { loading, error, data } = useQuery<getServices, getServicesVariables>(
      GET_SERVICES,
      {
        variables: {
          Ids: ids,
        },
        skip: servicesIdsloading,
      }
    );
    let services;
    if (loading == false) {
      services = createServicesAndBanerData(data?.getGenerals);
    }
    return { loading, error, data: services };
  };
  const createServicesAndBanerData = (services) => {
    let generalServices: ServiceCardProps[] = [];
    let bannerContent = "";
    let bannerButtom = "";
    let bannerTitle = "";
    let bannerImage = "";
    let bgPictureServices = "";
    if (services) {
      services.map((service) => {
        if (service.listBody) {
          if (service.key === "ServicesComponent") {
            service.listBody.map((item) => {
              generalServices.push({
                image: item.image,
                name: item.title,
                description: item.text,
              });
            });
          } else if (service.key === "BannerComponent") {
            bannerContent = service.listBody[0].text;
            bannerImage = service.listBody[0].image;
            bannerButtom = service.listBody[0].input;
            bannerTitle = service.listBody[0].title;
          }
        } else if (service.key === "HowToBannerBgPic") {
          bgPictureServices = service.body;
        }
      });
    }
  
    return {
      generalServices,
      bannerContent,
      bannerImage,
      bannerTitle,
      bannerButtom,
      bgPictureServices,
    };
  };
  
  
export const BannerComponent :FC = () => 
{
  const allServicesIds = fetchGenralServicesIds();
  const allServices = fetchAllServices(
    allServicesIds.ids,
    allServicesIds.loading
  );
  const loading = allServicesIds.loading || allServices.loading
  return (
  <LoadingData loading={loading}>
  {() => {   
  return ( 
  <>        
  <Banner
       title={allServices.data?.bannerTitle}
       description={allServices.data?.bannerContent}
       linktitle={allServices.data?.bannerButtom}
       image={allServices.data?.bannerImage}
       linkWrapper={renderAddItemLink}
       loading={allServices.loading}
     />
     </>)
   }}
   </LoadingData>
  )
}