import { useLocation, Navigate } from "react-router-dom";

type User = {
  token: string;
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

export const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const user: User | any = sessionStorage.getItem("user");
  const parseData = JSON.parse(user);

  if (!parseData?.token) {
    return <Navigate to={"/login"} />;
  }
  return children;
};
