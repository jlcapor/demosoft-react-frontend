import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { lazy } from "react";
import Loadable from "./Loadable";

const NotFound = Loadable(lazy(()=>import("./NotFound")))

const RoutesWithNotFound = ({ children }) => {
  return (
    <div>
      <Routes>
        {children}
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  );
};

export default RoutesWithNotFound;
