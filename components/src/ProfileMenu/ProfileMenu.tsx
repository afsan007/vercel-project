import React, { FC } from "react";
import styled from "styled-components";
import { Divider, Button, Menu, MenuItem } from "@material-ui/core";

const Email = styled(MenuItem)`
  padding-left: 24px;
  justify-content: center;
`;

const MenuButton = styled(MenuItem)`
  justify-content: center;
`;

const Root = styled(Menu)`
  margin-top: 22px;
`;
const ButtonStyle = styled(Button)`
  font-family: "IRANSans";
  border-radius: 17px;
  width: 154px;
  height: 30px;
  margin: 4px 20px;
  cursor: pointer;
  background-color: #91bfd9;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
`;

export interface MenuProps {
  email?: string | null | undefined;
  anchorEl: null | HTMLElement;
  handleClose: (boolean) => any;
  login: () => void;
  logout: () => void;
}

export const ProfileMenu: FC<MenuProps> = ({
  email,
  anchorEl,
  handleClose,
  login,
  logout,
}) => {
  const open = Boolean(anchorEl);

  const menuItems = email ? (
    <>
      <MenuItem onClick={handleClose}>
        <Email>{email}</Email>
      </MenuItem>
      <Divider />
      <MenuButton>
        <ButtonStyle onClick={logout}>خروج</ButtonStyle>
      </MenuButton>
    </>
  ) : (
    <MenuButton>
      <ButtonStyle onClick={login}>ورود / ثبت نام</ButtonStyle>
    </MenuButton>
  );
  return (
    <Root
      getContentAnchorEl={null}
      id="menu-appbar"
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      open={open}
      onClose={handleClose}
    >
      {menuItems}
    </Root>
  );
};
