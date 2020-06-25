import React from "react";
import { Header } from "./Header";
import { SearchComponent } from "../Search/SearchToolbar.stories";
export default {
  title: "Layout Components | NavBar / Header",
  component: Header,
};

const HomeLink = (childeren: JSX.Element) => <a href="#">{childeren}</a>;
const login = () => alert("Login");
const logout = () => alert("logout");

export const HeaderComponent = () => {
  return (
    <Header
      src="Logo.png"
      HomeLink={HomeLink}
      email="A.email@gmail.com"
      login={login}
      logout={logout}
    >
      <SearchComponent />
    </Header>
  );
};
