import * as React from "react"

import * as S from "./styles"
import { SideMenu } from "../../components/SideMenu";


export const Dashboard = () => {

  return (
    <S.Container>
      <SideMenu
        selected="Dashboard"
      />
      <h1>Dashboard</h1>
    </S.Container>
  );
}