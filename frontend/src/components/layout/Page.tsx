import React, { FC, useContext } from "react";
import Head from "next/head";
import { bool, node, InferProps } from "prop-types";
import { Header } from "bp-components";
import { Search } from "../Search/Search";
import Link from "next/link";
import AuthContext from "../auth/context/AuthContext";

const HomeLink = (childeren: JSX.Element | JSX.Element[]) => (
  <Link href="/">
    <a>{childeren}</a>
  </Link>
);

type PropTypes = InferProps<typeof propTypes>;

const Page: FC<PropTypes> = (props) => {
  const { login, logout, getUser } = useContext(AuthContext);
  const email = getUser()?.email;

  return (
    <div>
      {props.headless ? null : (
        <Head>
          <title>Educational Package</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylsheet" href="./global.css" />
        </Head>
      )}
        <Header
          src="/Logo.png"
          HomeLink={HomeLink}
          email={email}
          login={login}
          logout={logout}
        >
          <Search />
        </Header>
      {props.children}
    </div>
  );
};

const propTypes = {
  headless: bool,
  children: node,
};

Page.propTypes = propTypes;

export default Page;
