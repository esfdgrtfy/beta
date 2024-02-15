import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { makeStyles } from "@material-ui/core/styles";

import { Home, Clipboard, Headphones, User } from '@geist-ui/icons'

const useStyles = makeStyles((theme) => ({
  toolbar: {
    position: "fixed",
    bottom: "0",
    left: "0",
    width: "100%",
    color: "#fff",
    backgroundColor: "#5C4DB2",
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

const AppMenu: React.FC = (): JSX.Element => {
  const classes = useStyles();
  const [value, setValue] = React.useState("recents");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      sx={{
        bgcolor: "#fff",
        boxShadow: "0px -2px 8px -2px rgba(34, 60, 80, 0.24)",
        // "& .Mui-selected": {
        //   "& .MuiSvgIcon-root, & .MuiBottomNavigationAction-label": {
        //     color: (theme) => ,
        //   },
        // },
      }}
      className={classes.toolbar}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction
        label="Главная"
        value="home"
        icon={<Home />}
      />
      <BottomNavigationAction
        label="Запись"
        value="favorites"
        icon={<Clipboard />}
      />
      <BottomNavigationAction
        label="Услуги"
        value="nearby"
        icon={<Headphones />}
      />
      <BottomNavigationAction
        label="Профиль"
        value="folder"
        icon={<User />}
      />
    </BottomNavigation>
  );
};

export default AppMenu;
