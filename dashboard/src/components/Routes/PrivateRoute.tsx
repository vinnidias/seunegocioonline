import * as React from "react";
import {
  BrowserRouter as Router,
  useLocation,
  Navigate

} from "react-router-dom";


export const PrivateRoute = ({children}: {children: JSX.Element}) => {
  let auth = false;
  let location = useLocation();

  if(!auth) {
    return <Navigate to={"/login"} state={{from: location}} replace/>
  }
 return children
} 