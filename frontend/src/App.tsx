import React from "react";
import { BrowserRouter } from "react-router-dom";
import { useDispatch } from "react-redux";

import AppHeader from "layouts/navigation/AppHeader";
import Alert from "layouts/alert/Alert";
import Routes from "components/routing/Routes";

import { setAdminAuthToken, setUserAuthToken } from "utils/headers";
import { loadUser } from "redux/actions/user";
import { loadAdmin } from "redux/actions/admin";
import { GeistProvider, CssBaseline } from '@geist-ui/core';
import AppMenu from "layouts/navigation/AppMenu";

if (localStorage.admin__token) setAdminAuthToken(localStorage.admin__token);
if (localStorage.user__token) setUserAuthToken(localStorage.user__token);

const App: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loadUser());
    dispatch(loadAdmin());
  }, [dispatch]);

  return (
    <GeistProvider>
      <CssBaseline />
      <BrowserRouter>
        <>
          <AppHeader />
          <main className='app'>
            <Routes />
            <Alert />
          </main>
          <AppMenu />
        </>
      </BrowserRouter>
    </GeistProvider>
  );
};

export default App;
