import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getRegisteredUsersState } from "@src/toolkit/index";

const Auth = ({ children }) => {
  const { isAuth } = useSelector(getRegisteredUsersState);

  if (!isAuth) return <Navigate to="/auth" />;

  return children;
};

export { Auth };
