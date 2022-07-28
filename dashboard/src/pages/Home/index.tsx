import * as React from "react";
import { SideMenu } from "../../components/SideMenu";
import * as S from "./styles";

export const Home: React.FC = () => {
  return (
    <S.Container>
      <SideMenu
        selected="Home"
      />
      <h1>Home</h1>
    </S.Container>
  );
};