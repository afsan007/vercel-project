import React , { FC } from 'react'
import {getPresenters,getPresentersVariables,} from "$gqlQueryTypes/getPresenters";
import {getPresenterIds,getPresenterIdsVariables,} from "$gqlQueryTypes/getPresenterIds";
import {   GET_PRESENTERIDS, GET_PRESENTER, } from "$queries";
import { useQuery } from "@apollo/react-hooks";
import {   Presnter, SimplePresenterProps, LoadingData } from 'bp-components'
import Link from "next/link";



const renderPresenterLink = (children: JSX.Element, id: string) => {
    return (
      <Link href="/presenter/[presenterId]" as={`/presenter/${id}`}>
        {children}
      </Link>
    );
  };
  

const FetchPresentersIds = () => {
    let { loading, error, data } = useQuery<
      getPresenterIds,
      getPresenterIdsVariables
    >(GET_PRESENTERIDS, {
      variables: {
        parentId: "5eb6b1ab923c300008351d9d",
        offset: 0,
        limit: 10,
      },
    });
  
    const ids = data?.search.items.map((item) => {
      return item._id;
    });
    return { loading, error, ids };
  };

  const FetchPresenters = (ids, idsIsLoading) => {
    const { loading, error, data } = useQuery<
      getPresenters,
      getPresentersVariables
    >(GET_PRESENTER, {
      variables: {
        PresenterIds: ids,
      },
      skip: idsIsLoading,
    });
    let presenters;
    if (loading === false) {
      presenters = createPresenterData(data?.getPresenters);
    }
    return { loading, error, data: presenters };
  };  

  const createPresenterData = (items) => {
    let presenters: SimplePresenterProps[] = [];
    if (items) {
      presenters = items.map(function (item) {
        return {
          id: item._id,
          name: item.title,
          education: item.affiliation,
          image: item.profileImage,
          link: renderPresenterLink,
        };
      });
    }
    return presenters;
  };

export const PresenterComponet: FC = () => {
    const presentersIds = FetchPresentersIds();
    const presenters = FetchPresenters(presentersIds.ids, presentersIds.loading);
    const loading = presentersIds.loading || presenters.loading;
    return (
    <LoadingData loading = {loading} >
        {()=>{
        return (
            <> 
            <Presnter
              presnters={presenters.data}
              loading={presenters.loading}
            />
            </>
            )
        }}
      </LoadingData>
    )
}