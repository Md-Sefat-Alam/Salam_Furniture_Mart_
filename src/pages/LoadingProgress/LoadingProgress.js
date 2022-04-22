import { LinearProgress } from "@mui/material";
import React from "react";

const LoadingProgress = ({ children, isLoadingTemp }) => {
  //   const { isLoading } = useAuth();
  if (isLoadingTemp) {
    return (
      <>
        <LinearProgress
          style={{
            position: "fixed",
            width: "100%",
            top: "0",
            zIndex: "99999999",
          }}
          color="inherit"
        />
        {children}
      </>
    );
  }
  return children;
};

export default LoadingProgress;
