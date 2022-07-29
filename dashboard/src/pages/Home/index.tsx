import * as React from "react";

import * as S from "./styles";
import { SideMenu } from "../../components/SideMenu";
import { Header } from "../../components/Header";
import { MenuContexts } from "../../contexts/MenuContexts";


export const Home: React.FC = () => {
  const { isOpen }:any = React.useContext(MenuContexts)
  return (
    <S.Container>
      <SideMenu
        isOpen={isOpen}
        selected="Home"
      />
      <Header title="Home"/>
    </S.Container>
  );
};