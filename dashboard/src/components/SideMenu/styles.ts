import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";

import { Theme } from "../../styles/Theme";
import { menuContent } from "./menuContent";


type IFocus = {
  focus: string
  name: string
}

export const Container = styled.div`
  position: fixed;
  width: 300px;
  height: 100%;
  background-color: ${Theme.colors.secondaryBg};
  border-left: 10px solid ${Theme.colors.secondaryBg};
  transition: .5s;
  overflow-x: hidden;
  
`;

export const List = styled.ul`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  
  
  li:nth-child(1){
    margin-bottom: 30px;
    pointer-events: none;
  }
`;

export const Item = styled.li<IFocus>`
    position: relative;
    width: 100%;
    list-style: none;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
  
    ${({ focus, name }) => focus === name && `
     background-color: ${Theme.colors.mainBg};
     ::before {
           content: "";
           position: absolute;
           right: 0;
           top: -50px;
           width: 50px;
           height: 50px;
           border-radius: 50%;
           background: transparent;
           border-radius: 50%;
           box-shadow: 35px 35px 0 10px ${Theme.colors.mainBg};
           pointer-events: none;
         }
   
     ::after {
       content: "";
       position: absolute;
       right: 0;
       bottom: -50px;
       width: 50px;
       height: 50px;
       border-radius: 50%;
       background: transparent;
       border-radius: 50%;
       box-shadow: 35px -35px 0 10px ${Theme.colors.mainBg};
       pointer-events: none;
     }
   
  `}
    :hover {
      background-color: ${Theme.colors.mainBg};
    
      ::before {
        content: "";
        position: absolute;
        right: 0;
        top: -50px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: transparent;
        border-radius: 50%;
        box-shadow: 35px 35px 0 10px ${Theme.colors.mainBg};
        pointer-events: none;
      }
        ::after {
          content: "";
          position: absolute;
          right: 0;
          bottom: -50px;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: transparent;
          border-radius: 50%;
          box-shadow: 35px -35px 0 10px ${Theme.colors.mainBg};
          pointer-events: none;
        }
    }
    
  
`

export const Ancor = styled(Link)<IFocus>`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  text-decoration: none;
  color: ${({focus, name})=> focus === name ? Theme.colors.secondaryBg : "#fff"};
  font-family: 'Koulen', cursive;
  .icon {
      position: relative;
      display: block;
      min-width: 60px;
      line-height: 60px;
      text-align: center;
    }
  .title { 
    text-align: center;
    position: relative;
    display: block;
    padding: 0 10px;
  }
  :hover{
    color: ${Theme.colors.secondaryBg};
  }
`;

export const Icon = styled.img`
  width: 25px;
  height: 25px;
  aspect-ratio: 1/1;
  margin: 0 auto;
  margin-bottom: -7px;
`;

export const HomeIcon = styled(AiOutlineHome)`
  
`