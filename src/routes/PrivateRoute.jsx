import React from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ element }) => {
  const { user, loading } = useAuth();

  const { pathname } = useLocation();

  if (loading) {
    return <div className="font-bold text-2xl text-slate-900">Loading...</div>;
  }

  return (
    <>
      {user ? element : <Navigate state={{ path: pathname }} to={"/login"} />}
    </>
  );
};

export default PrivateRoute;
