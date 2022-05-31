import { getAuth } from "firebase/auth";
import React, { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { MyAllDataContex } from "../../../App";
import auth from "../../../firebase.init";

const RequireAuth = ({ children }) => {
  const [services, setServices, auth, user, loading, error] =
    useContext(MyAllDataContex);
  let location = useLocation();
  if (loading) {
    <p>loading...</p>;
  }
  if (!user) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }
  return children;
};
// hello
export default RequireAuth;
