import * as React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { Container } from "./styles";
import { AuthContext } from "../../contexts/AuthContext";
import { apiClient } from "../../services/apiClient";

export const Login = () => {
  const { email, setEmail, password, setPassword, setToken, setUserData }: any =
    React.useContext(AuthContext);

  let navigate = useNavigate();
  let location = useLocation();

  const handleLogin = async (
    email: string,
    password: string
  ): Promise<void> => {
    try {
      console.log("login post iniciate");
      const req = await apiClient.post("/auth/login", {
        email,
        password,
      });

      const token = req.data.token;
      const user = req.data.user;
      setToken(token);
      setUserData(user);
      sessionStorage.setItem("user", JSON.stringify({ token, ...user }));
      navigate("/");

      console.log("login post is sucess", req.data);
    } catch (error: any) {
      console.log("login post fail", error.response.data, {
        email,
        password,
      });
    }
  };

  const buttonDisabled = email === "" || password === "" ? true : false;

  console.log(buttonDisabled);
  return (
    <Container isDisabled={buttonDisabled}>
      <h1>Seu Dashboard</h1>
      <form
        onSubmit={(e: React.SyntheticEvent) => {
          e.preventDefault();
          handleLogin(email, password);
        }}
        style={{ flexDirection: "column", display: "flex", gap: 10 }}
      >
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" disabled={buttonDisabled}>
          Entrar
        </button>
      </form>
    </Container>
  );
};
