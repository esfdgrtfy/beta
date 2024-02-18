import React from "react";

type ROUTES = {
  name: string;
  path: string;
  component: React.FC;
  exact?: boolean;
  role?: string;
  auth?: boolean;
};

const routesProps: ROUTES[] = [
  {
    name: "login",
    path: "/",
    component: React.lazy(() => import("pages/auth/Login")),
    exact: true,
    role: "guest",
    auth: false,
  },
  {
    name: "register",
    path: "/register",
    component: React.lazy(() => import("pages/auth/Register")),
    exact: true,
    role: "guest",
    auth: false,
  },
  {
    name: "login",
    path: "/admin-login",
    component: React.lazy(() => import("pages/admin/Login")),
    exact: true,
    role: "guest",
    auth: false,
  },
  {
    name: "dashboard",
    path: "/dashboard",
    component: React.lazy(() => import("pages/dashboard/Dashboard")),
    exact: true,
    role: "user",
    auth: true,
  },
  {
    name: "deposit",
    path: "/deposit",
    component: React.lazy(() => import("pages/user/Deposit")),
    exact: true,
    role: "user",
    auth: true,
  },
  {
    name: "withdraw",
    path: "/withdraw",
    component: React.lazy(() => import("pages/user/Withdraw")),
    exact: true,
    role: "user",
    auth: true,
  },
  {
    name: "wallet",
    path: "/wallet",
    component: React.lazy(() => import("pages/user/WalletManagement")),
    exact: true,
    role: "user",
    auth: true,
  },
  {
    name: "event",
    path: "/event",
    component: React.lazy(() => import("pages/user/Event")),
    exact: true,
    role: "user",
    auth: true,
  },
  {
    name: "about",
    path: "/about",
    component: React.lazy(() => import("pages/user/About")),
    exact: true,
    role: "user",
    auth: true,
  },
  {
    name: "rules",
    path: "/rules",
    component: React.lazy(() => import("pages/user/Rules")),
    exact: true,
    role: "user",
    auth: true,
  },
  {
    name: "description",
    path: "/description",
    component: React.lazy(() => import("pages/user/DescriptionShares")),
    exact: true,
    role: "user",
    auth: true,
  },
  {
    name: "news",
    path: "/news",
    component: React.lazy(() => import("pages/user/News")),
    exact: true,
    role: "user",
    auth: true,
  },
  {
    name: "users",
    path: "/users",
    component: React.lazy(() => import("pages/admin/Users")),
    exact: true,
    role: "admin",
    auth: true,
  },
  {
    name: "users",
    path: "/users",
    component: React.lazy(() => import("pages/admin/Users")),
    exact: true,
    role: "admin",
    auth: true,
  },
  {
    name: "notfound",
    path: "*",
    component: React.lazy(() => import("pages/not-found/NotFound")),
  },
];

export default routesProps;
