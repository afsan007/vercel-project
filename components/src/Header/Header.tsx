import React, { FC } from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import { ProfileIcon } from "../ProfileMenu/ProfileIcon";

const ToolBar = styled(Toolbar)`
  background-color: #ffffff;
  height: 100px;
`;

const Img = styled.img`
  width: 110px;
  @media (max-width: 767px) {
    width: 60px;
  }
`;

export interface HeaderProps {
  src: string;
  HomeLink: (children: JSX.Element) => JSX.Element;
  children: JSX.Element[] | JSX.Element;
  login: () => void;
  logout: () => void;
  email: string | null | undefined;
}

export const Header: FC<HeaderProps> = ({
  src,
  HomeLink,
  email,
  children,
  login,
  logout,
}) => {
  return (
    <AppBar>
      <ToolBar>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={0}
        >
          <Grid item lg={10} xs={10} sm={10} md={10} xl={10}>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="center"
              spacing={0}
            >
              <Grid item lg={4} xs={3} sm={3} md={2} xl={2}>
                {HomeLink(<Img src={src} />)}
              </Grid>
              <Grid item lg={8} xs={4} sm={7} md={8} xl={8}>
                {children}
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={1} xs={1} sm={1} md={1} xl={1}>
            <ProfileIcon
              email={email}
              login={login}
              logout={logout}
            ></ProfileIcon>
          </Grid>
        </Grid>
      </ToolBar>
    </AppBar>
  );
};
export default Header;
