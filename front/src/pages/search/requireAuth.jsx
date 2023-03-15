import React from "react";
import { Navigate } from "react-router-dom";

const requireAuth = (WrappedComponent, isLogin) => {
  const AuthenticatedComponent = (props) => {
    if (isLogin) {
      return <WrappedComponent {...props} />;
    } else {
      console.log("sdksjd");
      return <Navigate to="/login" />;
    }
  };

  return AuthenticatedComponent;
};

export default requireAuth;
