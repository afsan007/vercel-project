import { useEffect, useState } from 'react';
import Router from 'next/router';
import { LoadingData } from "bp-components";
// import { includeDefaultNamespaces } from '../../i18n';
import config from '../components/auth/util/config';

const LogoutCallback = () => {
  const [loading] = useState(true);
  useEffect(() => {
    process();
  }, []);

  const process = () => {
    Router.push(config.homePage);
  };

  return <>{loading ? <LoadingData loading = {loading}> 
    {()=> {return (<></>)}}</LoadingData>: ''}</>;
};

// LogoutCallback.getInitialProps = () => {
//   return {
//     namespacesRequired: includeDefaultNamespaces(['front']),
//   };
// };

export default LogoutCallback;