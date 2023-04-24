import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import React from "react";
const Alerta = ({ children, title, type, ...otherAlertProps }) => {
  return (
    <Alert {...otherAlertProps} severity={type}>
      <AlertTitle>{title}</AlertTitle>
      {children}
    </Alert>
  );
};

export default Alerta;
