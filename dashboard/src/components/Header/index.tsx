import * as React from "react"
import * as S from "./styles";
import { BiMenuAltRight } from "react-icons/bi"
import { MenuContexts } from "../../contexts/MenuContexts";

type IProps = {
  title: string;
}

export const Header: React.FC<IProps>= ({title}) => {
  const { isOpen, setIsOpen }: any = React.useContext(MenuContexts)
  console.log(isOpen)
  return (
    <S.Header isOpen={isOpen}>
      <h2>{title}</h2>
      <button onClick={()=> setIsOpen(!isOpen)}>
        <BiMenuAltRight />
      </button>

    </S.Header>
  )
}