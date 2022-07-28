import * as React from "react"

import * as S from "./styles"
import { SideMenu } from "../../components/SideMenu";
import { MenuContexts } from "../../contexts/MenuContexts";


export const Dashboard = () => {
  const { isOpen }: any = React.useContext(MenuContexts)
  return (
    <S.Container>
      <SideMenu
        isOpen={isOpen}
        selected="Dashboard"
      />
      <h1>Dashboard</h1>
    </S.Container>
  );
}