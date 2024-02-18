import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";

import { logOutAdmin } from "redux/actions/admin";
import { RootState } from "redux/reducers";

import { Bell, Globe } from "@geist-ui/icons";
import { Drawer, Modal, useModal } from "@geist-ui/core";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#5C4DB2",
    padding: "0 10%",
    marginBottom: "5vh",
    zIndex: 2,
  },
  title: {
    color: "#fff",
  },
  navLink: {
    textDecoration: "none",
    color: "#f4f4f4",
    fontFamily: "Roboto",
    padding: theme.spacing(1, 2),
  },
}));

const AppHeader: React.FC = (): JSX.Element => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const user = useSelector((state: RootState) => state.user);
  const admin = useSelector((state: RootState) => state.admin);

  const [state, setState] = React.useState(false);
  const [placement, setPlacement] = React.useState("");
  const open = (text: string) => {
    setPlacement(text);
    setState(true);
  };

  const { visible, setVisible, bindings } = useModal();

  const topLinks = user.isAuthenticated ? (
    <div style={{ cursor: "pointer" }}>
      <Bell onClick={() => open("left")} scale={1 / 2} color="#fff" />
      <Drawer
        visible={state}
        onClose={() => setState(false)}
        placement={"left"}
      >
        <Drawer.Title>Drawer</Drawer.Title>
        <Drawer.Subtitle>This is a drawer</Drawer.Subtitle>
        <Drawer.Content>
          <p>Some content contained within the drawer.</p>
        </Drawer.Content>
      </Drawer>
    </div>
  ) : admin.isAuthenticated ? (
    <></>
  ) : (
    <></>
  );

  const bottomLinks = user.isAuthenticated ? (
    <div style={{ cursor: "pointer" }}>
      <Globe onClick={() => setVisible(true)} color="#fff" />
    </div>
  ) : admin.isAuthenticated ? (
    <></>
  ) : (
    <>
      <NavLink exact to="/register" className={`${classes.navLink} nav-link`}>
        Register
      </NavLink>
      <NavLink exact to="/" className={`${classes.navLink} nav-link`}>
        Login
      </NavLink>
    </>
  );

  return (
    <Toolbar className={classes.toolbar}>
      {topLinks}
      {bottomLinks}
    </Toolbar>
  );
};

export default AppHeader;
