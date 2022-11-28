//Create the HOC for protected Routes
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const ReqAuth = ({children}) => {
    const isAuth = useSelector((state) => state.AuthReducer.isAuth);
  const location = useLocation();

  if (!isAuth) {
    return <Navigate to='/Login' state={{ from: location }} replace />;
  }

  return children;
};

export default ReqAuth;
