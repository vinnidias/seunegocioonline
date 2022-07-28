import * as React from 'react';

type IProps = {
  children: React.ReactNode
}

export const MenuContexts = React.createContext({});

export const MenuProvider = ({children}: IProps) => {
  const [isOpen, setIsOpen] = React.useState(true)

  return(
    <MenuContexts.Provider
      value={{
        isOpen,
        setIsOpen
      }}
    >
      {children}
    </MenuContexts.Provider>
  )
}