import React, { FC } from "react";
import IconButton from "@material-ui/core/IconButton";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import { ProfileMenu } from "./ProfileMenu";

export interface ProfileIconProps {
  email: string | null | undefined;
  login: () => void;
  logout: () => void;
}

export const ProfileIcon: FC<ProfileIconProps> = (props) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <div>
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <AccountCircleOutlinedIcon
          style={{ width: "48px", height: "35px", color: "#7a7a7a" }}
        />
      </IconButton>
      <ProfileMenu
        anchorEl={anchorEl}
        email={props.email}
        handleClose={handleClose}
        login={props.login}
        logout={props.logout}
      ></ProfileMenu>
    </div>
  );
};
