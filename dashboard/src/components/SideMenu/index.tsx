import * as React from "react"
import * as S from "./styles";

type IProps = {
  selected: string
}

export const SideMenu: React.FC<IProps> = ({selected}) => {

  return (
    <S.Container>
      <S.List >
        <li>
          <S.Ancor focus={selected} name={"Brand"} to="/">
            <span className="icon">
              
            </span>
            <span className="title">Seu Negócio</span>
          </S.Ancor>
        </li>
        <S.Item focus={selected} name={"Home"}>
          <S.Ancor focus={selected} name={"Home"} to="/">
            <span className="icon">
              <S.HomeIcon />
            </span>
            <span className="title">Home</span>
          </S.Ancor>
        </S.Item>

        <S.Item focus={selected} name={"Dashboard"}>
          <S.Ancor focus={selected} name={"Dashboard"} to="/dashboard">
            <span className="icon">
              <S.HomeIcon />
            </span>
            <span className="title">Dashboard</span>
          </S.Ancor>
        </S.Item>

        <S.Item focus={selected} name={"Customers"}>
          <S.Ancor focus={selected} name={"Customers"} to="/">
            <span className="icon">
              <S.HomeIcon />
            </span>
            <span className="title">Customers</span>
          </S.Ancor>
        </S.Item>

        <S.Item focus={selected} name={"Messages"}>
          <S.Ancor focus={selected} name={"Messages"} to="/">
            <span className="icon">
              <S.HomeIcon />
            </span>
            <span className="title">Messages</span>
          </S.Ancor>
        </S.Item>
      </S.List>
    </S.Container>
  );
};