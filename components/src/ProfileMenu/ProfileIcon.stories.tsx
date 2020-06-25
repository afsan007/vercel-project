import React from "react";
import { ProfileIcon } from "./ProfileIcon";

export default {
  title: "ATOMS | Profile / ProfileIcon",
  component: ProfileIcon,
};

const login = () => alert("Login");
const logout = () => alert("logout");

export const LogIn = () => {
  return <ProfileIcon email="" login={login} logout={logout}></ProfileIcon>;
};
export const LogOut = () => {
  return (
    <ProfileIcon
      email="a.email@gmil.com"
      login={login}
      logout={logout}
    ></ProfileIcon>
  );
};
