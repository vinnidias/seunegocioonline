import * as React from "react"
import * as S from "./styles";
import { BiMenuAltRight } from "react-icons/bi"
import { MenuContexts } from "../../contexts/MenuContexts";

export const Header: React.FC = () => {
  const { isOpen, setIsOpen }: any = React.useContext(MenuContexts)
  console.log(isOpen)
  return (
    <S.Header isOpen={isOpen}>
      Header aplication
      <button onClick={()=> setIsOpen(!isOpen)}>
        <BiMenuAltRight />
      </button>

    </S.Header>
  )
}