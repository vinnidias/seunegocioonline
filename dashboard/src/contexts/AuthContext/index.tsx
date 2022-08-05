import * as React from "react";

type IProps = {
  children: React.ReactNode;
};

type UserProps = {
  createdAt: string;
  email: string;
  id: string;
  name: string;
};

export const AuthContext = React.createContext({});

export const AuthProvider = ({ children }: IProps) => {
  const [token, setToken] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [userData, setUserData] = React.useState<UserProps>({
    createdAt: "",
    email: "",
    id: "",
    name: "",
  });

  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
        email,
        setEmail,
        password,
        setPassword,
        userData,
        setUserData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
